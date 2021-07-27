# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/yield/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/yield/gen/function_generator
> :: test: function generator
> :: case: function *a(){yield typeof 0}
## Options

`````js
{}
`````
## Input

`````js
function * gen() { function not_gen() { function *a(){yield typeof 0} }}
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
                                                "kind": 201360950,
                                                "flags": 64,
                                                "transformFlags": 32,
                                                "start": 48,
                                                "end": 50
                                            },
                                            "name": {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 50,
                                                "end": 51
                                            },
                                            "typeParameters": null,
                                            "formalParameterList": {
                                                "kind": 214,
                                                "formalParameters": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 52,
                                                "end": 52
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
                                                                    "transformFlags": 0,
                                                                    "start": 54,
                                                                    "end": 59
                                                                },
                                                                "delegate": false,
                                                                "asteriskToken": null,
                                                                "expression": {
                                                                    "kind": 126,
                                                                    "operandToken": {
                                                                        "kind": 138477613,
                                                                        "flags": 96,
                                                                        "transformFlags": 0,
                                                                        "start": 59,
                                                                        "end": 66
                                                                    },
                                                                    "operand": {
                                                                        "kind": 201392130,
                                                                        "text": 0,
                                                                        "rawText": "0",
                                                                        "flags": 96,
                                                                        "transformFlags": 0,
                                                                        "start": 66,
                                                                        "end": 68
                                                                    },
                                                                    "flags": 32,
                                                                    "transformFlags": 16384,
                                                                    "start": 59,
                                                                    "end": 68
                                                                },
                                                                "flags": 32,
                                                                "transformFlags": 4096,
                                                                "start": 54,
                                                                "end": 68
                                                            },
                                                            "flags": 16,
                                                            "transformFlags": 4096,
                                                            "start": 54,
                                                            "end": 68
                                                        }
                                                    ],
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 54,
                                                    "end": 68
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 53,
                                                "end": 69
                                            },
                                            "returnType": null,
                                            "flags": 272,
                                            "transformFlags": 0,
                                            "start": 39,
                                            "end": 69
                                        }
                                    ],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 39,
                                    "end": 69
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 37,
                                "end": 71
                            },
                            "returnType": null,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 18,
                            "end": 71
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 18,
                    "end": 71
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 16,
                "end": 72
            },
            "returnType": null,
            "flags": 272,
            "transformFlags": 0,
            "start": 0,
            "end": 72
        }
    ],
    "isModule": false,
    "source": "function * gen() { function not_gen() { function *a(){yield typeof 0} }}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 72
}
```

### Printed

```javascript
function *gen() {
  function not_gen() {
    function *a() {
      yield typeof 0;
    }
  }
}
```

### Diagnostics

```javascript
✔ No errors
```

