# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: function generator
> :: case: function* gf() { switch (1) { case yield* 'foo': break; } }
## Input

`````js
function * gen() { function not_gen() { function* gf() { switch (1) { case yield* 'foo': break; } } }}
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
                                                            "kind": 160,
                                                            "expression": {
                                                                "kind": 81921,
                                                                "value": 1,
                                                                "autofix": 0,
                                                                "flags": 768,
                                                                "start": 65,
                                                                "end": 66
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
                                                                                "start": 80,
                                                                                "end": 81
                                                                            },
                                                                            "expression": {
                                                                                "kind": 67174403,
                                                                                "value": "foo",
                                                                                "autofix": 0,
                                                                                "flags": 768,
                                                                                "start": 81,
                                                                                "end": 87
                                                                            },
                                                                            "autofix": 0,
                                                                            "flags": 256,
                                                                            "start": 74,
                                                                            "end": 87
                                                                        },
                                                                        "statements": [
                                                                            {
                                                                                "kind": 150,
                                                                                "label": null,
                                                                                "autofix": 0,
                                                                                "flags": 128,
                                                                                "start": 88,
                                                                                "end": 95
                                                                            }
                                                                        ],
                                                                        "autofix": 0,
                                                                        "flags": 128,
                                                                        "start": 69,
                                                                        "end": 95
                                                                    }
                                                                ],
                                                                "autofix": 0,
                                                                "flags": 128,
                                                                "start": 67,
                                                                "end": 97
                                                            },
                                                            "autofix": 0,
                                                            "flags": 128,
                                                            "start": 56,
                                                            "end": 97
                                                        }
                                                    ],
                                                    "multiline": false,
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 56,
                                                    "end": 97
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 54,
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
    "text": "function * gen() { function not_gen() { function* gf() { switch (1) { case yield* 'foo': break; } } }}",
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
> :: case: function* gf() { switch (1) { case yield* 'foo': break; } }
## Input

`````js
function * gen() { function not_gen() { function* gf() { switch (1) { case yield* 'foo': break; } } }}
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: function generator
> :: case: function* gf() { switch (1) { case yield* 'foo': break; } }
## Input

`````js
function * gen() { function not_gen() { function* gf() { switch (1) { case yield* 'foo': break; } } }}
`````
```

