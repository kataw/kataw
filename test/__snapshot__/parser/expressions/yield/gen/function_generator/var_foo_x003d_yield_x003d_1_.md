# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: function generator
> :: case: var foo = yield = 1;
## Input

`````js
function * gen() { function not_gen() { var foo = yield = 1; }}
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
                                                            "value": "foo",
                                                            "autofix": 0,
                                                            "flags": 768,
                                                            "start": 43,
                                                            "end": 47
                                                        },
                                                        "optionalToken": null,
                                                        "type": null,
                                                        "initializer": {
                                                            "kind": 125,
                                                            "left": {
                                                                "kind": 81921,
                                                                "value": "yield",
                                                                "autofix": 0,
                                                                "flags": 768,
                                                                "start": 49,
                                                                "end": 55
                                                            },
                                                            "operatorToken": {
                                                                "kind": 67174402,
                                                                "autofix": 0,
                                                                "flags": 0,
                                                                "start": 49,
                                                                "end": 57
                                                            },
                                                            "right": {
                                                                "kind": 81921,
                                                                "value": 1,
                                                                "autofix": 0,
                                                                "flags": 768,
                                                                "start": 57,
                                                                "end": 59
                                                            },
                                                            "autofix": 0,
                                                            "flags": 256,
                                                            "start": 49,
                                                            "end": 59
                                                        },
                                                        "autofix": 0,
                                                        "flags": 128,
                                                        "start": 43,
                                                        "end": 59
                                                    }
                                                ],
                                                "autofix": 0,
                                                "flags": 128,
                                                "start": 43,
                                                "end": 59
                                            },
                                            "autofix": 0,
                                            "flags": 128,
                                            "start": 39,
                                            "end": 60
                                        }
                                    ],
                                    "multiline": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 39,
                                    "end": 60
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 37,
                                "end": 62
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "autofix": 0,
                            "flags": 256,
                            "start": 18,
                            "end": 62
                        }
                    ],
                    "multiline": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 18,
                    "end": 62
                },
                "autofix": 0,
                "flags": 256,
                "start": 16,
                "end": 63
            },
            "typeParameters": null,
            "returnType": null,
            "autofix": 0,
            "flags": 2304,
            "start": 0,
            "end": 63
        }
    ],
    "isModule": false,
    "text": "function * gen() { function not_gen() { var foo = yield = 1; }}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 63
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: function generator
> :: case: var foo = yield = 1;
## Input

`````js
function * gen() { function not_gen() { var foo = yield = 1; }}
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: function generator
> :: case: var foo = yield = 1;
## Input

`````js
function * gen() { function not_gen() { var foo = yield = 1; }}
`````
```

