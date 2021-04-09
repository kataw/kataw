# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: function declaration
> :: case: var o = { *gf() { switch (1) { case yield: break; } } }
## Input

`````js
function not_gen() { var o = { *gf() { switch (1) { case yield: break; } } } }}
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
            "generatorToken": null,
            "name": {
                "kind": 81921,
                "value": "not_gen",
                "autofix": 0,
                "flags": 768,
                "start": 8,
                "end": 16
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "autofix": 0,
                "flags": 256,
                "start": 17,
                "end": 18
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
                                            "value": "o",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 24,
                                            "end": 26
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": {
                                            "kind": 220,
                                            "propertyList": {
                                                "kind": 218,
                                                "properties": [
                                                    {
                                                        "kind": 209,
                                                        "name": {
                                                            "kind": 81921,
                                                            "value": "gf",
                                                            "autofix": 0,
                                                            "flags": 768,
                                                            "start": 32,
                                                            "end": 34
                                                        },
                                                        "typeParameters": null,
                                                        "formalParameters": {
                                                            "kind": 214,
                                                            "formalParameterList": [],
                                                            "trailingComma": false,
                                                            "autofix": 0,
                                                            "flags": 256,
                                                            "start": 35,
                                                            "end": 36
                                                        },
                                                        "type": null,
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
                                                                            "start": 47,
                                                                            "end": 48
                                                                        },
                                                                        "caseBlock": {
                                                                            "kind": 152,
                                                                            "clauses": [
                                                                                {
                                                                                    "kind": 175,
                                                                                    "expression": {
                                                                                        "kind": 229,
                                                                                        "delegate": false,
                                                                                        "asteriskToken": null,
                                                                                        "expression": null,
                                                                                        "autofix": 0,
                                                                                        "flags": 256,
                                                                                        "start": 56,
                                                                                        "end": 62
                                                                                    },
                                                                                    "statements": [
                                                                                        {
                                                                                            "kind": 150,
                                                                                            "label": null,
                                                                                            "autofix": 0,
                                                                                            "flags": 128,
                                                                                            "start": 63,
                                                                                            "end": 70
                                                                                        }
                                                                                    ],
                                                                                    "autofix": 0,
                                                                                    "flags": 128,
                                                                                    "start": 51,
                                                                                    "end": 70
                                                                                }
                                                                            ],
                                                                            "autofix": 0,
                                                                            "flags": 128,
                                                                            "start": 49,
                                                                            "end": 72
                                                                        },
                                                                        "autofix": 0,
                                                                        "flags": 128,
                                                                        "start": 38,
                                                                        "end": 72
                                                                    }
                                                                ],
                                                                "multiline": false,
                                                                "autofix": 0,
                                                                "flags": 256,
                                                                "start": 38,
                                                                "end": 72
                                                            },
                                                            "autofix": 0,
                                                            "flags": 256,
                                                            "start": 36,
                                                            "end": 74
                                                        },
                                                        "autofix": 0,
                                                        "flags": 1280,
                                                        "start": 34,
                                                        "end": 74
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "multiline": false,
                                                "autofix": 0,
                                                "flags": 0,
                                                "start": 30,
                                                "end": 74
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 28,
                                            "end": 76
                                        },
                                        "autofix": 0,
                                        "flags": 128,
                                        "start": 24,
                                        "end": 76
                                    }
                                ],
                                "autofix": 0,
                                "flags": 128,
                                "start": 24,
                                "end": 76
                            },
                            "autofix": 0,
                            "flags": 128,
                            "start": 20,
                            "end": 76
                        }
                    ],
                    "multiline": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 20,
                    "end": 76
                },
                "autofix": 0,
                "flags": 256,
                "start": 18,
                "end": 78
            },
            "typeParameters": null,
            "returnType": null,
            "autofix": 0,
            "flags": 256,
            "start": 0,
            "end": 78
        }
    ],
    "isModule": false,
    "text": "function not_gen() { var o = { *gf() { switch (1) { case yield: break; } } } }}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 78,
            "end": 79
        }
    ],
    "start": 0,
    "end": 79
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: function declaration
> :: case: var o = { *gf() { switch (1) { case yield: break; } } }
## Input

`````js
function not_gen() { var o = { *gf() { switch (1) { case yield: break; } } } }}
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: function declaration
> :: case: var o = { *gf() { switch (1) { case yield: break; } } }
## Input

`````js
function not_gen() { var o = { *gf() { switch (1) { case yield: break; } } } }}
`````
```

