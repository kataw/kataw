# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-11
- From: kataw/test/__snapshot__/parser/expressions/yield/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/yield/gen/function_generator
> :: test: function generator
> :: case: function* foo() { yield 2; if (true) { yield 3 }; yield 4 }
## Options

`````js
{}
`````
## Input

`````js
function * gen() { function not_gen() { function* foo() { yield 2; if (true) { yield 3 }; yield 4 } }}
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
                                                "end": 49
                                            },
                                            "name": {
                                                "kind": 134299649,
                                                "text": "foo",
                                                "rawText": "foo",
                                                "flags": 96,
                                                "start": 49,
                                                "end": 53
                                            },
                                            "formalParameters": {
                                                "kind": 214,
                                                "formalParameterList": [],
                                                "trailingComma": false,
                                                "flags": 32,
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
                                                                    "flags": 64,
                                                                    "start": 57,
                                                                    "end": 63
                                                                },
                                                                "delegate": false,
                                                                "asteriskToken": null,
                                                                "expression": {
                                                                    "kind": 201392130,
                                                                    "text": 2,
                                                                    "rawText": "2",
                                                                    "flags": 96,
                                                                    "start": 63,
                                                                    "end": 65
                                                                },
                                                                "flags": 32,
                                                                "start": 57,
                                                                "end": 65
                                                            },
                                                            "flags": 16,
                                                            "start": 57,
                                                            "end": 66
                                                        },
                                                        {
                                                            "kind": 164,
                                                            "ifKeyword": {
                                                                "kind": 37757019,
                                                                "flags": 80,
                                                                "start": 66,
                                                                "end": 69
                                                            },
                                                            "expression": {
                                                                "kind": 24752947,
                                                                "flags": 96,
                                                                "start": 71,
                                                                "end": 75
                                                            },
                                                            "consequent": {
                                                                "kind": 124,
                                                                "block": {
                                                                    "kind": 249,
                                                                    "statements": [
                                                                        {
                                                                            "kind": 120,
                                                                            "expression": {
                                                                                "kind": 229,
                                                                                "yieldKeyword": {
                                                                                    "kind": 8454253,
                                                                                    "flags": 64,
                                                                                    "start": 78,
                                                                                    "end": 84
                                                                                },
                                                                                "delegate": false,
                                                                                "asteriskToken": null,
                                                                                "expression": {
                                                                                    "kind": 201392130,
                                                                                    "text": 3,
                                                                                    "rawText": "3",
                                                                                    "flags": 96,
                                                                                    "start": 84,
                                                                                    "end": 86
                                                                                },
                                                                                "flags": 32,
                                                                                "start": 78,
                                                                                "end": 86
                                                                            },
                                                                            "flags": 16,
                                                                            "start": 78,
                                                                            "end": 86
                                                                        }
                                                                    ],
                                                                    "flags": 16,
                                                                    "start": 78,
                                                                    "end": 86
                                                                },
                                                                "flags": 16,
                                                                "start": 76,
                                                                "end": 88
                                                            },
                                                            "elseKeyword": null,
                                                            "alternate": null,
                                                            "flags": 80,
                                                            "start": 66,
                                                            "end": 88
                                                        },
                                                        {
                                                            "kind": 168,
                                                            "flags": 16,
                                                            "start": 88,
                                                            "end": 89
                                                        },
                                                        {
                                                            "kind": 120,
                                                            "expression": {
                                                                "kind": 229,
                                                                "yieldKeyword": {
                                                                    "kind": 8454253,
                                                                    "flags": 64,
                                                                    "start": 89,
                                                                    "end": 95
                                                                },
                                                                "delegate": false,
                                                                "asteriskToken": null,
                                                                "expression": {
                                                                    "kind": 201392130,
                                                                    "text": 4,
                                                                    "rawText": "4",
                                                                    "flags": 96,
                                                                    "start": 95,
                                                                    "end": 97
                                                                },
                                                                "flags": 32,
                                                                "start": 89,
                                                                "end": 97
                                                            },
                                                            "flags": 16,
                                                            "start": 89,
                                                            "end": 97
                                                        }
                                                    ],
                                                    "flags": 32,
                                                    "start": 57,
                                                    "end": 97
                                                },
                                                "flags": 32,
                                                "start": 55,
                                                "end": 99
                                            },
                                            "typeParameters": null,
                                            "returnType": null,
                                            "flags": 272,
                                            "start": 39,
                                            "end": 99
                                        }
                                    ],
                                    "flags": 32,
                                    "start": 39,
                                    "end": 99
                                },
                                "flags": 32,
                                "start": 37,
                                "end": 101
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 16,
                            "start": 18,
                            "end": 101
                        }
                    ],
                    "flags": 32,
                    "start": 18,
                    "end": 101
                },
                "flags": 32,
                "start": 16,
                "end": 102
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 102
        }
    ],
    "isModule": false,
    "source": "function * gen() { function not_gen() { function* foo() { yield 2; if (true) { yield 3 }; yield 4 } }}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 102
}
```

### Printed

```javascript

function * gen() {
  function not_gen() {
    function * foo() {
      yield 2;
      if (true) {
          yield 3;
        }
      yield 4;
    }
  }
}
```

### Diagnostics

```javascript
✔ No errors
```

