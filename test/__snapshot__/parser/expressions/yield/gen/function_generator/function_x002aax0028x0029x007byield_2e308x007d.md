# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/expressions/yield/autogen.md
- Path: kataw8/test\__snapshot__\parser\expressions\yield\gen\function_generator
> :: test: function generator
> :: case: function *a(){yield 2e308}
## Input

`````js
function * gen() { function not_gen() { function *a(){yield 2e308} }}
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
                                            "generatorToken": {
                                                "kind": 67143222,
                                                "flags": 64,
                                                "start": 48,
                                                "end": 50
                                            },
                                            "name": {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 96,
                                                "start": 50,
                                                "end": 51
                                            },
                                            "formalParameters": {
                                                "kind": 214,
                                                "formalParameterList": [],
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
                                                                    "start": 54,
                                                                    "end": 59
                                                                },
                                                                "delegate": false,
                                                                "asteriskToken": null,
                                                                "expression": {
                                                                    "kind": 201392130,
                                                                    "text": null,
                                                                    "rawText": "2e308",
                                                                    "flags": 96,
                                                                    "start": 59,
                                                                    "end": 65
                                                                },
                                                                "flags": 32,
                                                                "start": 54,
                                                                "end": 65
                                                            },
                                                            "flags": 16,
                                                            "start": 54,
                                                            "end": 65
                                                        }
                                                    ],
                                                    "flags": 32,
                                                    "start": 54,
                                                    "end": 65
                                                },
                                                "flags": 32,
                                                "start": 53,
                                                "end": 66
                                            },
                                            "typeParameters": null,
                                            "returnType": null,
                                            "flags": 272,
                                            "start": 39,
                                            "end": 66
                                        }
                                    ],
                                    "flags": 32,
                                    "start": 39,
                                    "end": 66
                                },
                                "flags": 32,
                                "start": 37,
                                "end": 68
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 16,
                            "start": 18,
                            "end": 68
                        }
                    ],
                    "flags": 32,
                    "start": 18,
                    "end": 68
                },
                "flags": 32,
                "start": 16,
                "end": 69
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 69
        }
    ],
    "isModule": false,
    "source": "function * gen() { function not_gen() { function *a(){yield 2e308} }}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 69
}
```

### Printed

```javascript

function * gen() {
  function not_gen() {
    function * a() {
      yield 2e308;
    }
  }
}
```

### Diagnostics

```javascript
✔ No errors
```

