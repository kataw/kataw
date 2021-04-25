# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: function generator
> :: case: function* foo() { yield 2; if (true) { yield 3 }; yield 4 }
## Input

`````js
function * gen() { function not_gen() { function* foo() { yield 2; if (true) { yield 3 }; yield 4 } }}
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
                                            "kind": 176,
                                            "declareKeyword": null,
                                            "asyncKeyword": null,
                                            "functionKeyword": {
                                                "kind": 37822554,
                                                "flags": 768,
                                                "start": 39,
                                                "end": 48
                                            },
                                            "generatorToken": {
                                                "kind": 67143222,
                                                "flags": 768,
                                                "start": 48,
                                                "end": 49
                                            },
                                            "name": {
                                                "kind": 134299649,
                                                "text": "foo",
                                                "rawText": "foo",
                                                "flags": 768,
                                                "start": 49,
                                                "end": 53
                                            },
                                            "formalParameters": {
                                                "kind": 214,
                                                "formalParameterList": [],
                                                "trailingComma": false,
                                                "flags": 256,
                                                "start": 53,
                                                "end": 55
                                            },
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [
                                                        {
                                                            "kind": 120,
                                                            "expression": {
                                                                "kind": 229,
                                                                "yieldKeyword": {
                                                                    "kind": 8454253,
                                                                    "flags": 768,
                                                                    "start": 57,
                                                                    "end": 63
                                                                },
                                                                "delegate": false,
                                                                "asteriskToken": null,
                                                                "expression": {
                                                                    "kind": 201392130,
                                                                    "text": 2,
                                                                    "rawText": "2",
                                                                    "flags": 768,
                                                                    "start": 63,
                                                                    "end": 65
                                                                },
                                                                "flags": 256,
                                                                "start": 57,
                                                                "end": 65
                                                            },
                                                            "flags": 128,
                                                            "start": 57,
                                                            "end": 66
                                                        },
                                                        {
                                                            "kind": 164,
                                                            "ifKeyword": {
                                                                "kind": 37757019,
                                                                "flags": 768,
                                                                "start": 66,
                                                                "end": 69
                                                            },
                                                            "expression": {
                                                                "kind": 134,
                                                                "text": true,
                                                                "flags": 768,
                                                                "start": 71,
                                                                "end": 75
                                                            },
                                                            "consequent": {
                                                                "kind": 249,
                                                                "block": {
                                                                    "kind": 124,
                                                                    "statements": [
                                                                        {
                                                                            "kind": 120,
                                                                            "expression": {
                                                                                "kind": 229,
                                                                                "yieldKeyword": {
                                                                                    "kind": 8454253,
                                                                                    "flags": 768,
                                                                                    "start": 78,
                                                                                    "end": 84
                                                                                },
                                                                                "delegate": false,
                                                                                "asteriskToken": null,
                                                                                "expression": {
                                                                                    "kind": 201392130,
                                                                                    "text": 3,
                                                                                    "rawText": "3",
                                                                                    "flags": 768,
                                                                                    "start": 84,
                                                                                    "end": 86
                                                                                },
                                                                                "flags": 256,
                                                                                "start": 78,
                                                                                "end": 86
                                                                            },
                                                                            "flags": 128,
                                                                            "start": 78,
                                                                            "end": 86
                                                                        }
                                                                    ],
                                                                    "multiLine": false,
                                                                    "flags": 128,
                                                                    "start": 78,
                                                                    "end": 86
                                                                },
                                                                "flags": 128,
                                                                "start": 76,
                                                                "end": 88
                                                            },
                                                            "elseKeyword": null,
                                                            "alternate": null,
                                                            "flags": 128,
                                                            "start": 66,
                                                            "end": 88
                                                        },
                                                        {
                                                            "kind": 168,
                                                            "flags": 128,
                                                            "start": 88,
                                                            "end": 89
                                                        },
                                                        {
                                                            "kind": 120,
                                                            "expression": {
                                                                "kind": 229,
                                                                "yieldKeyword": {
                                                                    "kind": 8454253,
                                                                    "flags": 768,
                                                                    "start": 89,
                                                                    "end": 95
                                                                },
                                                                "delegate": false,
                                                                "asteriskToken": null,
                                                                "expression": {
                                                                    "kind": 201392130,
                                                                    "text": 4,
                                                                    "rawText": "4",
                                                                    "flags": 768,
                                                                    "start": 95,
                                                                    "end": 97
                                                                },
                                                                "flags": 256,
                                                                "start": 89,
                                                                "end": 97
                                                            },
                                                            "flags": 128,
                                                            "start": 89,
                                                            "end": 97
                                                        }
                                                    ],
                                                    "multiline": false,
                                                    "flags": 256,
                                                    "start": 57,
                                                    "end": 97
                                                },
                                                "flags": 256,
                                                "start": 55,
                                                "end": 99
                                            },
                                            "typeParameters": null,
                                            "returnType": null,
                                            "flags": 2176,
                                            "start": 39,
                                            "end": 99
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 256,
                                    "start": 39,
                                    "end": 99
                                },
                                "flags": 256,
                                "start": 37,
                                "end": 101
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 128,
                            "start": 18,
                            "end": 101
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 18,
                    "end": 101
                },
                "flags": 256,
                "start": 16,
                "end": 102
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 2176,
            "start": 0,
            "end": 102
        }
    ],
    "isModule": false,
    "text": "function * gen() { function not_gen() { function* foo() { yield 2; if (true) { yield 3 }; yield 4 } }}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 102
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

