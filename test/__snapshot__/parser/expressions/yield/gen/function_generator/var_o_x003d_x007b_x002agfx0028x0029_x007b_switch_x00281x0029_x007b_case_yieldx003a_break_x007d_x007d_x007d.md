# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: function generator
> :: case: var o = { *gf() { switch (1) { case yield: break; } } }
## Input

`````js
function * gen() { function not_gen() { var o = { *gf() { switch (1) { case yield: break; } } } }}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 176,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37814362,
                "flags": 768,
                "start": 0,
                "end": 8
            },
            "generatorToken": {
                "kind": 67143222,
                "flags": 768,
                "start": 8,
                "end": 10
            },
            "name": {
                "kind": 81921,
                "text": "gen",
                "rawText": "gen",
                "flags": 768,
                "start": 10,
                "end": 14
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 256,
                "start": 14,
                "end": 16
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 176,
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37814362,
                                "flags": 768,
                                "start": 18,
                                "end": 27
                            },
                            "generatorToken": null,
                            "name": {
                                "kind": 81921,
                                "text": "not_gen",
                                "rawText": "not_gen",
                                "flags": 768,
                                "start": 27,
                                "end": 35
                            },
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 256,
                                "start": 35,
                                "end": 37
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [
                                        {
                                            "kind": 155,
                                            "varKeyword": {
                                                "kind": 37757002,
                                                "flags": 768,
                                                "start": 39,
                                                "end": 43
                                            },
                                            "declarationList": {
                                                "kind": 156,
                                                "declarations": [
                                                    {
                                                        "kind": 157,
                                                        "binding": {
                                                            "kind": 81921,
                                                            "text": "o",
                                                            "rawText": "o",
                                                            "flags": 768,
                                                            "start": 43,
                                                            "end": 45
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
                                                                            "text": "gf",
                                                                            "rawText": "gf",
                                                                            "flags": 768,
                                                                            "start": 51,
                                                                            "end": 53
                                                                        },
                                                                        "typeParameters": null,
                                                                        "formalParameters": {
                                                                            "kind": 214,
                                                                            "formalParameterList": [],
                                                                            "trailingComma": false,
                                                                            "flags": 1280,
                                                                            "start": 54,
                                                                            "end": 55
                                                                        },
                                                                        "type": null,
                                                                        "contents": {
                                                                            "kind": 216,
                                                                            "functionStatementList": {
                                                                                "kind": 217,
                                                                                "directives": [],
                                                                                "statements": [
                                                                                    {
                                                                                        "kind": 160,
                                                                                        "switchKeyword": {
                                                                                            "kind": 37757024,
                                                                                            "flags": 768,
                                                                                            "start": 57,
                                                                                            "end": 64
                                                                                        },
                                                                                        "expression": {
                                                                                            "kind": 81921,
                                                                                            "text": 1,
                                                                                            "rawText": "1",
                                                                                            "flags": 768,
                                                                                            "start": 66,
                                                                                            "end": 67
                                                                                        },
                                                                                        "caseBlock": {
                                                                                            "kind": 152,
                                                                                            "clauses": [
                                                                                                {
                                                                                                    "kind": 175,
                                                                                                    "caseKeyword": {
                                                                                                        "kind": 4194382,
                                                                                                        "flags": 768,
                                                                                                        "start": 70,
                                                                                                        "end": 75
                                                                                                    },
                                                                                                    "expression": {
                                                                                                        "kind": 229,
                                                                                                        "yieldKeyword": {
                                                                                                            "kind": 8454253,
                                                                                                            "flags": 768,
                                                                                                            "start": 75,
                                                                                                            "end": 81
                                                                                                        },
                                                                                                        "delegate": false,
                                                                                                        "asteriskToken": null,
                                                                                                        "expression": null,
                                                                                                        "flags": 256,
                                                                                                        "start": 75,
                                                                                                        "end": 81
                                                                                                    },
                                                                                                    "statements": [
                                                                                                        {
                                                                                                            "kind": 150,
                                                                                                            "breakKeyword": {
                                                                                                                "kind": 37757005,
                                                                                                                "flags": 768,
                                                                                                                "start": 82,
                                                                                                                "end": 88
                                                                                                            },
                                                                                                            "label": null,
                                                                                                            "flags": 128,
                                                                                                            "start": 82,
                                                                                                            "end": 89
                                                                                                        }
                                                                                                    ],
                                                                                                    "flags": 128,
                                                                                                    "start": 70,
                                                                                                    "end": 89
                                                                                                }
                                                                                            ],
                                                                                            "flags": 128,
                                                                                            "start": 68,
                                                                                            "end": 91
                                                                                        },
                                                                                        "flags": 128,
                                                                                        "start": 57,
                                                                                        "end": 91
                                                                                    }
                                                                                ],
                                                                                "multiline": false,
                                                                                "flags": 256,
                                                                                "start": 57,
                                                                                "end": 91
                                                                            },
                                                                            "flags": 256,
                                                                            "start": 55,
                                                                            "end": 93
                                                                        },
                                                                        "flags": 1280,
                                                                        "start": 53,
                                                                        "end": 93
                                                                    }
                                                                ],
                                                                "trailingComma": false,
                                                                "multiline": false,
                                                                "flags": 0,
                                                                "start": 49,
                                                                "end": 93
                                                            },
                                                            "flags": 256,
                                                            "start": 47,
                                                            "end": 95
                                                        },
                                                        "flags": 128,
                                                        "start": 43,
                                                        "end": 95
                                                    }
                                                ],
                                                "flags": 128,
                                                "start": 43,
                                                "end": 95
                                            },
                                            "flags": 128,
                                            "start": 39,
                                            "end": 95
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 256,
                                    "start": 39,
                                    "end": 95
                                },
                                "flags": 256,
                                "start": 37,
                                "end": 97
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 256,
                            "start": 18,
                            "end": 97
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 18,
                    "end": 97
                },
                "flags": 256,
                "start": 16,
                "end": 98
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 2304,
            "start": 0,
            "end": 98
        }
    ],
    "isModule": false,
    "text": "function * gen() { function not_gen() { var o = { *gf() { switch (1) { case yield: break; } } } }}",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 98
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: function generator
> :: case: var o = { *gf() { switch (1) { case yield: break; } } }
## Input

`````js
function * gen() { function not_gen() { var o = { *gf() { switch (1) { case yield: break; } } } }}
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: function generator
> :: case: var o = { *gf() { switch (1) { case yield: break; } } }
## Input

`````js
function * gen() { function not_gen() { var o = { *gf() { switch (1) { case yield: break; } } } }}
`````
```

