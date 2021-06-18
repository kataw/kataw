# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/yield/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/yield/gen/function_generator
> :: test: function generator
> :: case: function *g() { yield void x }
## Options

`````js
{}
`````
## Input

`````js
function * gen() { function not_gen() { function *g() { yield void x } }}
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
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
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
                            "typeParameters": null,
                            "formalParameterList": {
                                "kind": 214,
                                "formalParameters": [],
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
                                            "generatorToken": {
                                                "kind": 67143222,
                                                "flags": 64,
                                                "start": 48,
                                                "end": 50
                                            },
                                            "name": {
                                                "kind": 134299649,
                                                "text": "g",
                                                "rawText": "g",
                                                "flags": 96,
                                                "start": 50,
                                                "end": 51
                                            },
                                            "typeParameters": null,
                                            "formalParameterList": {
                                                "kind": 214,
                                                "formalParameters": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 51,
                                                "end": 53
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
                                                                    "flags": 64,
                                                                    "start": 55,
                                                                    "end": 61
                                                                },
                                                                "delegate": false,
                                                                "asteriskToken": null,
                                                                "expression": {
                                                                    "kind": 126,
                                                                    "operandToken": {
                                                                        "kind": 138477615,
                                                                        "flags": 96,
                                                                        "start": 61,
                                                                        "end": 66
                                                                    },
                                                                    "operand": {
                                                                        "kind": 134299649,
                                                                        "text": "x",
                                                                        "rawText": "x",
                                                                        "flags": 96,
                                                                        "start": 66,
                                                                        "end": 68
                                                                    },
                                                                    "flags": 32,
                                                                    "start": 61,
                                                                    "end": 68
                                                                },
                                                                "flags": 32,
                                                                "start": 55,
                                                                "end": 68
                                                            },
                                                            "flags": 16,
                                                            "start": 55,
                                                            "end": 68
                                                        }
                                                    ],
                                                    "flags": 32,
                                                    "start": 55,
                                                    "end": 68
                                                },
                                                "flags": 32,
                                                "start": 53,
                                                "end": 70
                                            },
                                            "returnType": null,
                                            "flags": 272,
                                            "start": 39,
                                            "end": 70
                                        }
                                    ],
                                    "flags": 32,
                                    "start": 39,
                                    "end": 70
                                },
                                "flags": 32,
                                "start": 37,
                                "end": 72
                            },
                            "returnType": null,
                            "flags": 16,
                            "start": 18,
                            "end": 72
                        }
                    ],
                    "flags": 32,
                    "start": 18,
                    "end": 72
                },
                "flags": 32,
                "start": 16,
                "end": 73
            },
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 73
        }
    ],
    "isModule": false,
    "source": "function * gen() { function not_gen() { function *g() { yield void x } }}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 73
}
```

### Printed

```javascript

function * gen() {
  function not_gen() {
    function * g() {
      yield void x;
    }
  }
}
```

### Diagnostics

```javascript
✔ No errors
```

