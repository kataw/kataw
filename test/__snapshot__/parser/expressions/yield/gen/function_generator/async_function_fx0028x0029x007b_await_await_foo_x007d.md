# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-11
- From: kataw/test/__snapshot__/parser/expressions/yield/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/yield/gen/function_generator
> :: test: function generator
> :: case: async function f(){ await await foo; }
## Options

`````js
{}
`````
## Input

`````js
function * gen() { function not_gen() { async function f(){ await await foo; } }}
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
                                            "asyncKeyword": {
                                                "kind": 82031,
                                                "flags": 64,
                                                "start": 39,
                                                "end": 45
                                            },
                                            "functionKeyword": {
                                                "kind": 37822554,
                                                "flags": 64,
                                                "start": 45,
                                                "end": 54
                                            },
                                            "generatorToken": null,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "f",
                                                "rawText": "f",
                                                "flags": 96,
                                                "start": 54,
                                                "end": 56
                                            },
                                            "formalParameters": {
                                                "kind": 214,
                                                "formalParameterList": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 56,
                                                "end": 58
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
                                                                "kind": 208,
                                                                "awaitKeyword": {
                                                                    "kind": 82196,
                                                                    "flags": 64,
                                                                    "start": 59,
                                                                    "end": 65
                                                                },
                                                                "expression": {
                                                                    "kind": 208,
                                                                    "awaitKeyword": {
                                                                        "kind": 82196,
                                                                        "flags": 64,
                                                                        "start": 65,
                                                                        "end": 71
                                                                    },
                                                                    "expression": {
                                                                        "kind": 134299649,
                                                                        "text": "foo",
                                                                        "rawText": "foo",
                                                                        "flags": 96,
                                                                        "start": 71,
                                                                        "end": 75
                                                                    },
                                                                    "flags": 32,
                                                                    "start": 65,
                                                                    "end": 75
                                                                },
                                                                "flags": 32,
                                                                "start": 59,
                                                                "end": 75
                                                            },
                                                            "flags": 16,
                                                            "start": 59,
                                                            "end": 76
                                                        }
                                                    ],
                                                    "flags": 32,
                                                    "start": 59,
                                                    "end": 76
                                                },
                                                "flags": 32,
                                                "start": 58,
                                                "end": 78
                                            },
                                            "typeParameters": null,
                                            "returnType": null,
                                            "flags": 144,
                                            "start": 39,
                                            "end": 78
                                        }
                                    ],
                                    "flags": 32,
                                    "start": 39,
                                    "end": 78
                                },
                                "flags": 32,
                                "start": 37,
                                "end": 80
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 16,
                            "start": 18,
                            "end": 80
                        }
                    ],
                    "flags": 32,
                    "start": 18,
                    "end": 80
                },
                "flags": 32,
                "start": 16,
                "end": 81
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 81
        }
    ],
    "isModule": false,
    "source": "function * gen() { function not_gen() { async function f(){ await await foo; } }}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 81
}
```

### Printed

```javascript

function * gen() {
  function not_gen() {
    async function f() {
      await await foo;
    }
  }
}
```

### Diagnostics

```javascript
✔ No errors
```

