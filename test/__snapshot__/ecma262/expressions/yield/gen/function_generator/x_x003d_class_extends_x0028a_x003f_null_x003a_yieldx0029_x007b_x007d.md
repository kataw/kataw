# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/yield/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/yield/gen/function_generator
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
                "transformFlags": 0,
                "start": 0,
                "end": 8
            },
            "asteriskToken": {
                "kind": 201360950,
                "flags": 64,
                "transformFlags": 32,
                "start": 8,
                "end": 10
            },
            "name": {
                "kind": 134299649,
                "text": "gen",
                "rawText": "gen",
                "flags": 96,
                "transformFlags": 0,
                "start": 10,
                "end": 14
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 15,
                "end": 15
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
                                "transformFlags": 0,
                                "start": 18,
                                "end": 27
                            },
                            "asteriskToken": null,
                            "name": {
                                "kind": 134299649,
                                "text": "not_gen",
                                "rawText": "not_gen",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 27,
                                "end": 35
                            },
                            "typeParameters": null,
                            "formalParameterList": {
                                "kind": 214,
                                "formalParameters": [],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 36,
                                "end": 36
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
                                                    "transformFlags": 0,
                                                    "start": 39,
                                                    "end": 41
                                                },
                                                "operatorToken": {
                                                    "kind": 4125,
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 41,
                                                    "end": 43
                                                },
                                                "right": {
                                                    "kind": 189,
                                                    "decorators": null,
                                                    "classKeyword": {
                                                        "kind": 37822544,
                                                        "flags": 64,
                                                        "transformFlags": 0,
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
                                                                "transformFlags": 0,
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
                                                                        "transformFlags": 0,
                                                                        "start": 59,
                                                                        "end": 60
                                                                    },
                                                                    "questionToken": {
                                                                        "kind": 134217750,
                                                                        "flags": 64,
                                                                        "transformFlags": 0,
                                                                        "start": 60,
                                                                        "end": 62
                                                                    },
                                                                    "consequent": {
                                                                        "kind": 138477575,
                                                                        "flags": 96,
                                                                        "transformFlags": 0,
                                                                        "start": 62,
                                                                        "end": 67
                                                                    },
                                                                    "colonToken": {
                                                                        "kind": 21,
                                                                        "flags": 64,
                                                                        "transformFlags": 0,
                                                                        "start": 67,
                                                                        "end": 69
                                                                    },
                                                                    "alternate": {
                                                                        "kind": 134299649,
                                                                        "text": "yield",
                                                                        "rawText": "yield",
                                                                        "flags": 96,
                                                                        "transformFlags": 0,
                                                                        "start": 69,
                                                                        "end": 75
                                                                    },
                                                                    "flags": 96,
                                                                    "transformFlags": 4096,
                                                                    "start": 57,
                                                                    "end": 75
                                                                },
                                                                "flags": 32,
                                                                "transformFlags": 0,
                                                                "start": 57,
                                                                "end": 76
                                                            },
                                                            "typeParameter": null,
                                                            "flags": 16,
                                                            "transformFlags": 0,
                                                            "start": 57,
                                                            "end": 76
                                                        },
                                                        "body": {
                                                            "kind": 303,
                                                            "elements": [],
                                                            "flags": 32,
                                                            "transformFlags": 0,
                                                            "start": 78,
                                                            "end": 78
                                                        },
                                                        "flags": 49,
                                                        "transformFlags": 0,
                                                        "start": 32,
                                                        "end": 80
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 43,
                                                    "end": 80
                                                },
                                                "flags": 0,
                                                "transformFlags": 128,
                                                "start": 39,
                                                "end": 80
                                            },
                                            "flags": 16,
                                            "transformFlags": 4096,
                                            "start": 39,
                                            "end": 80
                                        }
                                    ],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 39,
                                    "end": 80
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 37,
                                "end": 82
                            },
                            "returnType": null,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 18,
                            "end": 82
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 18,
                    "end": 82
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 16,
                "end": 83
            },
            "returnType": null,
            "flags": 272,
            "transformFlags": 0,
            "start": 0,
            "end": 83
        }
    ],
    "isModule": false,
    "source": "function * gen() { function not_gen() { x = class extends (a ? null : yield) { } }}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 83
}
```

### Printed

```javascript
function *gen() {
  function not_gen() {
    x = class extends (a ? null : yield) {};
  }
}
```

### Diagnostics

```javascript
✔ No errors
```

