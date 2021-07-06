# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/yield/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/yield/gen/function_generator
> :: test: function generator
> :: case: function * gen() { (yield) ? yield : yield }
## Options

`````js
{}
`````
## Input

`````js
function * gen() { function not_gen() { function * gen() { (yield) ? yield : yield } }}
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
                "kind": 67143222,
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
                                            "kind": 176,
                                            "declareKeyword": null,
                                            "asyncKeyword": null,
                                            "functionKeyword": {
                                                "kind": 37822554,
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 39,
                                                "end": 48
                                            },
                                            "asteriskToken": {
                                                "kind": 67143222,
                                                "flags": 64,
                                                "transformFlags": 32,
                                                "start": 48,
                                                "end": 50
                                            },
                                            "name": {
                                                "kind": 134299649,
                                                "text": "gen",
                                                "rawText": "gen",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 50,
                                                "end": 54
                                            },
                                            "typeParameters": null,
                                            "formalParameterList": {
                                                "kind": 214,
                                                "formalParameters": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 55,
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
                                                                "kind": 197,
                                                                "shortCircuit": {
                                                                    "kind": 121,
                                                                    "expression": {
                                                                        "kind": 229,
                                                                        "yieldKeyword": {
                                                                            "kind": 8454253,
                                                                            "flags": 64,
                                                                            "transformFlags": 0,
                                                                            "start": 60,
                                                                            "end": 65
                                                                        },
                                                                        "delegate": false,
                                                                        "asteriskToken": null,
                                                                        "expression": null,
                                                                        "flags": 32,
                                                                        "transformFlags": 0,
                                                                        "start": 60,
                                                                        "end": 65
                                                                    },
                                                                    "flags": 58,
                                                                    "transformFlags": 0,
                                                                    "start": 32,
                                                                    "end": 66
                                                                },
                                                                "questionToken": {
                                                                    "kind": 134217750,
                                                                    "flags": 64,
                                                                    "transformFlags": 0,
                                                                    "start": 66,
                                                                    "end": 68
                                                                },
                                                                "consequent": {
                                                                    "kind": 229,
                                                                    "yieldKeyword": {
                                                                        "kind": 8454253,
                                                                        "flags": 64,
                                                                        "transformFlags": 0,
                                                                        "start": 68,
                                                                        "end": 74
                                                                    },
                                                                    "delegate": false,
                                                                    "asteriskToken": null,
                                                                    "expression": null,
                                                                    "flags": 32,
                                                                    "transformFlags": 0,
                                                                    "start": 68,
                                                                    "end": 74
                                                                },
                                                                "colonToken": {
                                                                    "kind": 21,
                                                                    "flags": 64,
                                                                    "transformFlags": 0,
                                                                    "start": 74,
                                                                    "end": 76
                                                                },
                                                                "alternate": {
                                                                    "kind": 229,
                                                                    "yieldKeyword": {
                                                                        "kind": 8454253,
                                                                        "flags": 64,
                                                                        "transformFlags": 0,
                                                                        "start": 76,
                                                                        "end": 82
                                                                    },
                                                                    "delegate": false,
                                                                    "asteriskToken": null,
                                                                    "expression": null,
                                                                    "flags": 32,
                                                                    "transformFlags": 0,
                                                                    "start": 76,
                                                                    "end": 82
                                                                },
                                                                "flags": 58,
                                                                "transformFlags": 0,
                                                                "start": 58,
                                                                "end": 82
                                                            },
                                                            "flags": 16,
                                                            "transformFlags": 0,
                                                            "start": 58,
                                                            "end": 82
                                                        }
                                                    ],
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 58,
                                                    "end": 82
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 56,
                                                "end": 84
                                            },
                                            "returnType": null,
                                            "flags": 272,
                                            "transformFlags": 0,
                                            "start": 39,
                                            "end": 84
                                        }
                                    ],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 39,
                                    "end": 84
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 37,
                                "end": 86
                            },
                            "returnType": null,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 18,
                            "end": 86
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 18,
                    "end": 86
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 16,
                "end": 87
            },
            "returnType": null,
            "flags": 272,
            "transformFlags": 0,
            "start": 0,
            "end": 87
        }
    ],
    "isModule": false,
    "source": "function * gen() { function not_gen() { function * gen() { (yield) ? yield : yield } }}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 87
}
```

### Printed

```javascript

function * gen() {
  function not_gen() {
    function * gen() {
      (yield ) ? yield  : yield ;
    }
  }
}
```

### Diagnostics

```javascript
✔ No errors
```

