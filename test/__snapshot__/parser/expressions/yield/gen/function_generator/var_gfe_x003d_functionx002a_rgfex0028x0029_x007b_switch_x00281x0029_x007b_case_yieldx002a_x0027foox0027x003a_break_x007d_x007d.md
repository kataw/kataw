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
    "directives": [],
    "statements": [
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
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
                "kind": 134299649,
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
                            "declareKeyword": null,
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 768,
                                "start": 18,
                                "end": 27
                            },
                            "generatorToken": null,
                            "name": {
                                "kind": 134299649,
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
                                            "declareKeyword": null,
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
                                                            "kind": 134299649,
                                                            "text": "gfe",
                                                            "rawText": "gfe",
                                                            "flags": 768,
                                                            "start": 43,
                                                            "end": 47
                                                        },
                                                        "optionalToken": null,
                                                        "type": null,
                                                        "initializer": {
                                                            "kind": 177,
                                                            "asyncKeyword": null,
                                                            "functionKeyword": {
                                                                "kind": 37822554,
                                                                "flags": 768,
                                                                "start": 49,
                                                                "end": 58
                                                            },
                                                            "generatorToken": {
                                                                "kind": 67143222,
                                                                "flags": 768,
                                                                "start": 58,
                                                                "end": 59
                                                            },
                                                            "name": {
                                                                "kind": 134299649,
                                                                "text": "rgfe",
                                                                "rawText": "rgfe",
                                                                "flags": 768,
                                                                "start": 59,
                                                                "end": 64
                                                            },
                                                            "formalParameters": {
                                                                "kind": 214,
                                                                "formalParameterList": [],
                                                                "trailingComma": false,
                                                                "flags": 256,
                                                                "start": 64,
                                                                "end": 66
                                                            },
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
                                                                                "start": 68,
                                                                                "end": 75
                                                                            },
                                                                            "expression": {
                                                                                "kind": 134299649,
                                                                                "text": 1,
                                                                                "rawText": "1",
                                                                                "flags": 768,
                                                                                "start": 77,
                                                                                "end": 78
                                                                            },
                                                                            "caseBlock": {
                                                                                "kind": 152,
                                                                                "clauses": [
                                                                                    {
                                                                                        "kind": 175,
                                                                                        "caseKeyword": {
                                                                                            "kind": 4194382,
                                                                                            "flags": 768,
                                                                                            "start": 81,
                                                                                            "end": 86
                                                                                        },
                                                                                        "expression": {
                                                                                            "kind": 229,
                                                                                            "yieldKeyword": {
                                                                                                "kind": 8454253,
                                                                                                "flags": 768,
                                                                                                "start": 86,
                                                                                                "end": 92
                                                                                            },
                                                                                            "delegate": true,
                                                                                            "asteriskToken": {
                                                                                                "kind": 67143222,
                                                                                                "flags": 768,
                                                                                                "start": 92,
                                                                                                "end": 93
                                                                                            },
                                                                                            "expression": {
                                                                                                "kind": 201392131,
                                                                                                "text": "foo",
                                                                                                "rawText": "foo",
                                                                                                "flags": 67109632,
                                                                                                "start": 93,
                                                                                                "end": 99
                                                                                            },
                                                                                            "flags": 256,
                                                                                            "start": 86,
                                                                                            "end": 99
                                                                                        },
                                                                                        "statements": [
                                                                                            {
                                                                                                "kind": 150,
                                                                                                "breakKeyword": {
                                                                                                    "kind": 37757005,
                                                                                                    "flags": 768,
                                                                                                    "start": 100,
                                                                                                    "end": 106
                                                                                                },
                                                                                                "label": null,
                                                                                                "flags": 128,
                                                                                                "start": 100,
                                                                                                "end": 107
                                                                                            }
                                                                                        ],
                                                                                        "flags": 128,
                                                                                        "start": 81,
                                                                                        "end": 107
                                                                                    }
                                                                                ],
                                                                                "flags": 128,
                                                                                "start": 79,
                                                                                "end": 109
                                                                            },
                                                                            "flags": 128,
                                                                            "start": 68,
                                                                            "end": 109
                                                                        }
                                                                    ],
                                                                    "multiline": false,
                                                                    "flags": 256,
                                                                    "start": 68,
                                                                    "end": 109
                                                                },
                                                                "flags": 256,
                                                                "start": 66,
                                                                "end": 111
                                                            },
                                                            "typeParameters": null,
                                                            "returnType": null,
                                                            "flags": 2304,
                                                            "start": 49,
                                                            "end": 111
                                                        },
                                                        "flags": 128,
                                                        "start": 43,
                                                        "end": 111
                                                    }
                                                ],
                                                "flags": 128,
                                                "start": 43,
                                                "end": 111
                                            },
                                            "flags": 128,
                                            "start": 39,
                                            "end": 111
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 256,
                                    "start": 39,
                                    "end": 111
                                },
                                "flags": 256,
                                "start": 37,
                                "end": 113
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 128,
                            "start": 18,
                            "end": 113
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 18,
                    "end": 113
                },
                "flags": 256,
                "start": 16,
                "end": 114
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 2176,
            "start": 0,
            "end": 114
        }
    ],
    "isModule": false,
    "text": "function * gen() { function not_gen() { var gfe = function* rgfe() { switch (1) { case yield* 'foo': break; } } }}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 114
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2714}@ No errors
```

