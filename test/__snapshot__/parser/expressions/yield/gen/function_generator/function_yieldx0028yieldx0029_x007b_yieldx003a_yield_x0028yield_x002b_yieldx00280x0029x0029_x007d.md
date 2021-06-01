# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-30
- From: kataw7/test\__snapshot__/parser/expressions/yield/autogen.md
- Path: kataw7/test\__snapshot__\parser\expressions\yield\gen\function_generator
> :: test: function generator
> :: case: function yield(yield) { yield: yield (yield + yield(0)); }
## Input

`````js
function * gen() { function not_gen() { function yield(yield) { yield: yield (yield + yield(0)); } }}
`````
## Output

### CST

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
                "flags": 64,
                "start": 0,
                "end": 8
            },
            "generatorToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 8,
                "end": 10
            },
            "name": {
                "kind": 134299649,
                "text": "gen",
                "rawText": "gen",
                "flags": 96,
                "start": 10,
                "end": 14
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
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
                                "flags": 64,
                                "start": 18,
                                "end": 27
                            },
                            "generatorToken": null,
                            "name": {
                                "kind": 134299649,
                                "text": "not_gen",
                                "rawText": "not_gen",
                                "flags": 96,
                                "start": 27,
                                "end": 35
                            },
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 32,
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
                                                "flags": 64,
                                                "start": 39,
                                                "end": 48
                                            },
                                            "generatorToken": null,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "yield",
                                                "rawText": "yield",
                                                "flags": 96,
                                                "start": 48,
                                                "end": 54
                                            },
                                            "formalParameters": {
                                                "kind": 214,
                                                "formalParameterList": [
                                                    {
                                                        "kind": 134299649,
                                                        "text": "yield",
                                                        "rawText": "yield",
                                                        "flags": 96,
                                                        "start": 55,
                                                        "end": 60
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 96,
                                                "start": 54,
                                                "end": 61
                                            },
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [
                                                        {
                                                            "kind": 163,
                                                            "label": {
                                                                "kind": 134299649,
                                                                "text": "yield",
                                                                "rawText": "yield",
                                                                "flags": 96,
                                                                "start": 63,
                                                                "end": 69
                                                            },
                                                            "colonToken": {
                                                                "kind": 21,
                                                                "flags": 64,
                                                                "start": 69,
                                                                "end": 70
                                                            },
                                                            "statement": {
                                                                "kind": 120,
                                                                "expression": {
                                                                    "kind": 131,
                                                                    "expression": {
                                                                        "kind": 134299649,
                                                                        "text": "yield",
                                                                        "rawText": "yield",
                                                                        "flags": 96,
                                                                        "start": 70,
                                                                        "end": 76
                                                                    },
                                                                    "argumentList": {
                                                                        "kind": 256,
                                                                        "elements": [
                                                                            {
                                                                                "kind": 198,
                                                                                "left": {
                                                                                    "kind": 134299649,
                                                                                    "text": "yield",
                                                                                    "rawText": "yield",
                                                                                    "flags": 96,
                                                                                    "start": 78,
                                                                                    "end": 83
                                                                                },
                                                                                "operatorToken": {
                                                                                    "kind": 99634,
                                                                                    "flags": 64,
                                                                                    "start": 83,
                                                                                    "end": 85
                                                                                },
                                                                                "right": {
                                                                                    "kind": 131,
                                                                                    "expression": {
                                                                                        "kind": 134299649,
                                                                                        "text": "yield",
                                                                                        "rawText": "yield",
                                                                                        "flags": 96,
                                                                                        "start": 85,
                                                                                        "end": 91
                                                                                    },
                                                                                    "argumentList": {
                                                                                        "kind": 256,
                                                                                        "elements": [
                                                                                            {
                                                                                                "kind": 201392130,
                                                                                                "text": 0,
                                                                                                "rawText": "0",
                                                                                                "flags": 96,
                                                                                                "start": 92,
                                                                                                "end": 93
                                                                                            }
                                                                                        ],
                                                                                        "trailingComma": false,
                                                                                        "flags": 32,
                                                                                        "start": 92,
                                                                                        "end": 93
                                                                                    },
                                                                                    "flags": 268435488,
                                                                                    "start": 85,
                                                                                    "end": 94
                                                                                },
                                                                                "flags": 32,
                                                                                "start": 78,
                                                                                "end": 94
                                                                            }
                                                                        ],
                                                                        "trailingComma": false,
                                                                        "flags": 32,
                                                                        "start": 78,
                                                                        "end": 94
                                                                    },
                                                                    "flags": 268435488,
                                                                    "start": 70,
                                                                    "end": 95
                                                                },
                                                                "flags": 16,
                                                                "start": 70,
                                                                "end": 96
                                                            },
                                                            "flags": 16,
                                                            "start": 63,
                                                            "end": 96
                                                        }
                                                    ],
                                                    "flags": 32,
                                                    "start": 63,
                                                    "end": 96
                                                },
                                                "flags": 32,
                                                "start": 61,
                                                "end": 98
                                            },
                                            "typeParameters": null,
                                            "returnType": null,
                                            "flags": 16,
                                            "start": 39,
                                            "end": 98
                                        }
                                    ],
                                    "flags": 32,
                                    "start": 39,
                                    "end": 98
                                },
                                "flags": 32,
                                "start": 37,
                                "end": 100
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 16,
                            "start": 18,
                            "end": 100
                        }
                    ],
                    "flags": 32,
                    "start": 18,
                    "end": 100
                },
                "flags": 32,
                "start": 16,
                "end": 101
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 101
        }
    ],
    "isModule": false,
    "source": "function * gen() { function not_gen() { function yield(yield) { yield: yield (yield + yield(0)); } }}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 101
}
```

### Printed

```javascript

function * gen() {
  function not_gen() {
    function yield(yield) {
      yield: yield(yield + yield(0));
    }
  }
}
```

### Diagnostics

```javascript
✔ No errors
```

