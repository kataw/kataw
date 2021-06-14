# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/yield/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/yield/gen/function_generator
> :: test: function generator
> :: case: x = class extends (a ? null : yield) { }
## Options

`````js
{}
`````
## Input

`````js
function * gen() { function not_gen() { x = class extends (a ? null : yield) { } }}
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
                                            "kind": 120,
                                            "expression": {
                                                "kind": 125,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "start": 39,
                                                    "end": 41
                                                },
                                                "operatorToken": {
                                                    "kind": 4125,
                                                    "flags": 96,
                                                    "start": 41,
                                                    "end": 43
                                                },
                                                "right": {
                                                    "kind": 189,
                                                    "decorators": null,
                                                    "classKeyword": {
                                                        "kind": 37822544,
                                                        "flags": 64,
                                                        "start": 43,
                                                        "end": 49
                                                    },
                                                    "name": null,
                                                    "typeParameters": null,
                                                    "tail": {
                                                        "kind": 277,
                                                        "classHeritage": {
                                                            "kind": 279,
                                                            "extendsKeyword": {
                                                                "kind": 4194391,
                                                                "flags": 80,
                                                                "start": 49,
                                                                "end": 57
                                                            },
                                                            "expression": {
                                                                "kind": 121,
                                                                "expression": {
                                                                    "kind": 197,
                                                                    "shortCircuit": {
                                                                        "kind": 134299649,
                                                                        "text": "a",
                                                                        "rawText": "a",
                                                                        "flags": 96,
                                                                        "start": 59,
                                                                        "end": 60
                                                                    },
                                                                    "questionToken": {
                                                                        "kind": 134217750,
                                                                        "flags": 64,
                                                                        "start": 60,
                                                                        "end": 62
                                                                    },
                                                                    "consequent": {
                                                                        "kind": 138477575,
                                                                        "flags": 96,
                                                                        "start": 62,
                                                                        "end": 67
                                                                    },
                                                                    "colonToken": {
                                                                        "kind": 21,
                                                                        "flags": 64,
                                                                        "start": 67,
                                                                        "end": 69
                                                                    },
                                                                    "alternate": {
                                                                        "kind": 134299649,
                                                                        "text": "yield",
                                                                        "rawText": "yield",
                                                                        "flags": 96,
                                                                        "start": 69,
                                                                        "end": 75
                                                                    },
                                                                    "flags": 32,
                                                                    "start": 57,
                                                                    "end": 75
                                                                },
                                                                "flags": 32,
                                                                "start": 57,
                                                                "end": 76
                                                            },
                                                            "typeParameter": null,
                                                            "flags": 16,
                                                            "start": 57,
                                                            "end": 76
                                                        },
                                                        "body": {
                                                            "kind": 303,
                                                            "elements": [],
                                                            "flags": 32,
                                                            "start": 78,
                                                            "end": 78
                                                        },
                                                        "flags": 49,
                                                        "start": 32,
                                                        "end": 80
                                                    },
                                                    "flags": 32,
                                                    "start": 43,
                                                    "end": 80
                                                },
                                                "flags": 32,
                                                "start": 39,
                                                "end": 80
                                            },
                                            "flags": 16,
                                            "start": 39,
                                            "end": 80
                                        }
                                    ],
                                    "flags": 32,
                                    "start": 39,
                                    "end": 80
                                },
                                "flags": 32,
                                "start": 37,
                                "end": 82
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 16,
                            "start": 18,
                            "end": 82
                        }
                    ],
                    "flags": 32,
                    "start": 18,
                    "end": 82
                },
                "flags": 32,
                "start": 16,
                "end": 83
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 83
        }
    ],
    "isModule": false,
    "source": "function * gen() { function not_gen() { x = class extends (a ? null : yield) { } }}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 83
}
```

### Printed

```javascript

function * gen() {
  function not_gen() {
    x = class   {};
  }
}
```

### Diagnostics

```javascript
✔ No errors
```

