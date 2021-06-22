# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/yield/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/yield/gen/function_declaration
> :: test: function declaration
> :: case: (function * () { x = class extends (a ? null : yield) { } });
## Options

`````js
{}
`````
## Input

`````js
function not_gen() { (function * () { x = class extends (a ? null : yield) { } }); }}
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
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "not_gen",
                "rawText": "not_gen",
                "flags": 96,
                "start": 8,
                "end": 16
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 16,
                "end": 18
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
                                "kind": 121,
                                "expression": {
                                    "kind": 177,
                                    "asyncKeyword": null,
                                    "functionKeyword": {
                                        "kind": 37822554,
                                        "flags": 64,
                                        "start": 22,
                                        "end": 30
                                    },
                                    "asteriskToken": {
                                        "kind": 67143222,
                                        "flags": 64,
                                        "start": 30,
                                        "end": 32
                                    },
                                    "name": null,
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 32,
                                        "end": 35
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
                                                            "start": 37,
                                                            "end": 39
                                                        },
                                                        "operatorToken": {
                                                            "kind": 4125,
                                                            "flags": 96,
                                                            "start": 39,
                                                            "end": 41
                                                        },
                                                        "right": {
                                                            "kind": 189,
                                                            "decorators": null,
                                                            "classKeyword": {
                                                                "kind": 37822544,
                                                                "flags": 64,
                                                                "start": 41,
                                                                "end": 47
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
                                                                        "start": 47,
                                                                        "end": 55
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
                                                                                "start": 57,
                                                                                "end": 58
                                                                            },
                                                                            "questionToken": {
                                                                                "kind": 134217750,
                                                                                "flags": 64,
                                                                                "start": 58,
                                                                                "end": 60
                                                                            },
                                                                            "consequent": {
                                                                                "kind": 138477575,
                                                                                "flags": 96,
                                                                                "start": 60,
                                                                                "end": 65
                                                                            },
                                                                            "colonToken": {
                                                                                "kind": 21,
                                                                                "flags": 64,
                                                                                "start": 65,
                                                                                "end": 67
                                                                            },
                                                                            "alternate": {
                                                                                "kind": 229,
                                                                                "yieldKeyword": {
                                                                                    "kind": 8454253,
                                                                                    "flags": 64,
                                                                                    "start": 67,
                                                                                    "end": 73
                                                                                },
                                                                                "delegate": false,
                                                                                "asteriskToken": null,
                                                                                "expression": null,
                                                                                "flags": 32,
                                                                                "start": 67,
                                                                                "end": 73
                                                                            },
                                                                            "flags": 32,
                                                                            "start": 55,
                                                                            "end": 73
                                                                        },
                                                                        "flags": 32,
                                                                        "start": 55,
                                                                        "end": 74
                                                                    },
                                                                    "typeParameter": null,
                                                                    "flags": 16,
                                                                    "start": 55,
                                                                    "end": 74
                                                                },
                                                                "body": {
                                                                    "kind": 303,
                                                                    "elements": [],
                                                                    "flags": 32,
                                                                    "start": 76,
                                                                    "end": 76
                                                                },
                                                                "flags": 47,
                                                                "start": 32,
                                                                "end": 78
                                                            },
                                                            "flags": 32,
                                                            "start": 41,
                                                            "end": 78
                                                        },
                                                        "flags": 32,
                                                        "start": 37,
                                                        "end": 78
                                                    },
                                                    "flags": 16,
                                                    "start": 37,
                                                    "end": 78
                                                }
                                            ],
                                            "flags": 32,
                                            "start": 37,
                                            "end": 78
                                        },
                                        "flags": 32,
                                        "start": 35,
                                        "end": 80
                                    },
                                    "returnType": null,
                                    "flags": 288,
                                    "start": 22,
                                    "end": 80
                                },
                                "flags": 32,
                                "start": 20,
                                "end": 81
                            },
                            "flags": 16,
                            "start": 20,
                            "end": 82
                        }
                    ],
                    "flags": 32,
                    "start": 20,
                    "end": 82
                },
                "flags": 32,
                "start": 18,
                "end": 84
            },
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 84
        }
    ],
    "isModule": false,
    "source": "function not_gen() { (function * () { x = class extends (a ? null : yield) { } }); }}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 85
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Declaration or statement expected - start: 84, end: 85

```

