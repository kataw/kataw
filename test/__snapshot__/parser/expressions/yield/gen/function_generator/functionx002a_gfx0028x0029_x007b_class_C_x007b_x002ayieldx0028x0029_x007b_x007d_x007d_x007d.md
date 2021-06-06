# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw/test/__snapshot__/parser/expressions/yield/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/yield/gen/function_generator
> :: test: function generator
> :: case: function* gf() { class C { *yield() { } } }
## Input

`````js
function * gen() { function not_gen() { function* gf() { class C { *yield() { } } } }}
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
                                                "text": "gf",
                                                "rawText": "gf",
                                                "flags": 96,
                                                "start": 49,
                                                "end": 52
                                            },
                                            "formalParameters": {
                                                "kind": 214,
                                                "formalParameterList": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 52,
                                                "end": 54
                                            },
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [
                                                        {
                                                            "kind": 178,
                                                            "declareKeyword": null,
                                                            "decorators": null,
                                                            "classKeyword": {
                                                                "kind": 37822544,
                                                                "flags": 80,
                                                                "start": 56,
                                                                "end": 62
                                                            },
                                                            "name": {
                                                                "kind": 134299649,
                                                                "text": "C",
                                                                "rawText": "C",
                                                                "flags": 96,
                                                                "start": 62,
                                                                "end": 64
                                                            },
                                                            "typeParameters": null,
                                                            "tail": {
                                                                "kind": 277,
                                                                "classHeritage": null,
                                                                "body": {
                                                                    "kind": 262,
                                                                    "elements": [
                                                                        {
                                                                            "kind": 278,
                                                                            "declareToken": null,
                                                                            "decorators": null,
                                                                            "generatorToken": {
                                                                                "kind": 67143222,
                                                                                "flags": 64,
                                                                                "start": 66,
                                                                                "end": 68
                                                                            },
                                                                            "staticKeyword": null,
                                                                            "asyncKeyword": null,
                                                                            "setKeyword": null,
                                                                            "getKeyword": null,
                                                                            "method": {
                                                                                "kind": 209,
                                                                                "name": {
                                                                                    "kind": 134299649,
                                                                                    "text": "yield",
                                                                                    "rawText": "yield",
                                                                                    "flags": 96,
                                                                                    "start": 68,
                                                                                    "end": 73
                                                                                },
                                                                                "typeParameters": null,
                                                                                "formalParameters": {
                                                                                    "kind": 214,
                                                                                    "formalParameterList": [],
                                                                                    "trailingComma": false,
                                                                                    "flags": 0,
                                                                                    "start": 74,
                                                                                    "end": 75
                                                                                },
                                                                                "returnType": null,
                                                                                "contents": {
                                                                                    "kind": 216,
                                                                                    "functionStatementList": {
                                                                                        "kind": 217,
                                                                                        "directives": [],
                                                                                        "statements": [],
                                                                                        "flags": 32,
                                                                                        "start": 77,
                                                                                        "end": 77
                                                                                    },
                                                                                    "flags": 32,
                                                                                    "start": 75,
                                                                                    "end": 79
                                                                                },
                                                                                "flags": 0,
                                                                                "start": 73,
                                                                                "end": 79
                                                                            },
                                                                            "flags": 0,
                                                                            "start": 66,
                                                                            "end": 79
                                                                        }
                                                                    ],
                                                                    "flags": 32,
                                                                    "start": 66,
                                                                    "end": 79
                                                                },
                                                                "flags": 64,
                                                                "start": 32,
                                                                "end": 81
                                                            },
                                                            "flags": 16,
                                                            "start": 56,
                                                            "end": 81
                                                        }
                                                    ],
                                                    "flags": 32,
                                                    "start": 56,
                                                    "end": 81
                                                },
                                                "flags": 32,
                                                "start": 54,
                                                "end": 83
                                            },
                                            "typeParameters": null,
                                            "returnType": null,
                                            "flags": 272,
                                            "start": 39,
                                            "end": 83
                                        }
                                    ],
                                    "flags": 32,
                                    "start": 39,
                                    "end": 83
                                },
                                "flags": 32,
                                "start": 37,
                                "end": 85
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 16,
                            "start": 18,
                            "end": 85
                        }
                    ],
                    "flags": 32,
                    "start": 18,
                    "end": 85
                },
                "flags": 32,
                "start": 16,
                "end": 86
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 86
        }
    ],
    "isModule": false,
    "source": "function * gen() { function not_gen() { function* gf() { class C { *yield() { } } } }}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 86
}
```

### Printed

```javascript

function * gen() {
  function not_gen() {
    function * gf() {
      class C {
        yield() {}
      }
    }
  }
}
```

### Diagnostics

```javascript
✔ No errors
```

