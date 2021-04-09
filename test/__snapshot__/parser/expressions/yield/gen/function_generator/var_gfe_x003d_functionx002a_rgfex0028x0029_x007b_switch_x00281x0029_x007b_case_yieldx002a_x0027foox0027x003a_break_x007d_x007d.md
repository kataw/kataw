# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: function generator
> :: case: var gfe = function* rgfe() { switch (1) { case yield* 'foo': break; } }
## Input

`````js
function * gen() { function not_gen() { var gfe = function* rgfe() { switch (1) { case yield* 'foo': break; } } }}
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
                                                            "value": "gfe",
                                                            "autofix": 0,
                                                            "flags": 768,
                                                            "start": 43,
                                                            "end": 47
                                                        },
                                                        "optionalToken": null,
                                                        "type": null,
                                                        "initializer": {
                                                            "kind": 177,
                                                            "asyncToken": null,
                                                            "generatorToken": {
                                                                "kind": 67143222,
                                                                "autofix": 0,
                                                                "flags": 0,
                                                                "start": 58,
                                                                "end": 59
                                                            },
                                                            "name": {
                                                                "kind": 81921,
                                                                "value": "rgfe",
                                                                "autofix": 0,
                                                                "flags": 768,
                                                                "start": 59,
                                                                "end": 64
                                                            },
                                                            "formalParameters": {
                                                                "kind": 214,
                                                                "formalParameterList": [],
                                                                "trailingComma": false,
                                                                "autofix": 0,
                                                                "flags": 256,
                                                                "start": 65,
                                                                "end": 66
                                                            },
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
                                                                                "start": 77,
                                                                                "end": 78
                                                                            },
                                                                            "caseBlock": {
                                                                                "kind": 152,
                                                                                "clauses": [
                                                                                    {
                                                                                        "kind": 175,
                                                                                        "expression": {
                                                                                            "kind": 229,
                                                                                            "delegate": true,
                                                                                            "asteriskToken": {
                                                                                                "kind": 67143222,
                                                                                                "autofix": 0,
                                                                                                "flags": 0,
                                                                                                "start": 92,
                                                                                                "end": 93
                                                                                            },
                                                                                            "expression": {
                                                                                                "kind": 67174403,
                                                                                                "value": "foo",
                                                                                                "autofix": 0,
                                                                                                "flags": 768,
                                                                                                "start": 93,
                                                                                                "end": 99
                                                                                            },
                                                                                            "autofix": 0,
                                                                                            "flags": 256,
                                                                                            "start": 86,
                                                                                            "end": 99
                                                                                        },
                                                                                        "statements": [
                                                                                            {
                                                                                                "kind": 150,
                                                                                                "label": null,
                                                                                                "autofix": 0,
                                                                                                "flags": 128,
                                                                                                "start": 100,
                                                                                                "end": 107
                                                                                            }
                                                                                        ],
                                                                                        "autofix": 0,
                                                                                        "flags": 128,
                                                                                        "start": 81,
                                                                                        "end": 107
                                                                                    }
                                                                                ],
                                                                                "autofix": 0,
                                                                                "flags": 128,
                                                                                "start": 79,
                                                                                "end": 109
                                                                            },
                                                                            "autofix": 0,
                                                                            "flags": 128,
                                                                            "start": 68,
                                                                            "end": 109
                                                                        }
                                                                    ],
                                                                    "multiline": false,
                                                                    "autofix": 0,
                                                                    "flags": 256,
                                                                    "start": 68,
                                                                    "end": 109
                                                                },
                                                                "autofix": 0,
                                                                "flags": 256,
                                                                "start": 66,
                                                                "end": 111
                                                            },
                                                            "typeParameters": null,
                                                            "returnType": null,
                                                            "autofix": 0,
                                                            "flags": 2304,
                                                            "start": 49,
                                                            "end": 111
                                                        },
                                                        "autofix": 0,
                                                        "flags": 128,
                                                        "start": 43,
                                                        "end": 111
                                                    }
                                                ],
                                                "autofix": 0,
                                                "flags": 128,
                                                "start": 43,
                                                "end": 111
                                            },
                                            "autofix": 0,
                                            "flags": 128,
                                            "start": 39,
                                            "end": 111
                                        }
                                    ],
                                    "multiline": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 39,
                                    "end": 111
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 37,
                                "end": 113
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "autofix": 0,
                            "flags": 256,
                            "start": 18,
                            "end": 113
                        }
                    ],
                    "multiline": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 18,
                    "end": 113
                },
                "autofix": 0,
                "flags": 256,
                "start": 16,
                "end": 114
            },
            "typeParameters": null,
            "returnType": null,
            "autofix": 0,
            "flags": 2304,
            "start": 0,
            "end": 114
        }
    ],
    "isModule": false,
    "text": "function * gen() { function not_gen() { var gfe = function* rgfe() { switch (1) { case yield* 'foo': break; } } }}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 114
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: function generator
> :: case: var gfe = function* rgfe() { switch (1) { case yield* 'foo': break; } }
## Input

`````js
function * gen() { function not_gen() { var gfe = function* rgfe() { switch (1) { case yield* 'foo': break; } } }}
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: function generator
> :: case: var gfe = function* rgfe() { switch (1) { case yield* 'foo': break; } }
## Input

`````js
function * gen() { function not_gen() { var gfe = function* rgfe() { switch (1) { case yield* 'foo': break; } } }}
`````
```

