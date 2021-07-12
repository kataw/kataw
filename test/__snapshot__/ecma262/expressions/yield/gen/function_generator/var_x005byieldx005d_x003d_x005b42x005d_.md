# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/yield/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/yield/gen/function_generator
> :: test: function generator
> :: case: var [yield] = [42];
## Options

`````js
{}
`````
## Input

`````js
function * gen() { function not_gen() { var [yield] = [42]; }}
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
            "asteriskToken": {
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
                                "start": 18,
                                "end": 27
                            },
                            "asteriskToken": null,
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
                                            "kind": 155,
                                            "declareKeyword": null,
                                            "varKeyword": {
                                                "kind": 37757002,
                                                "flags": 80,
                                                "start": 39,
                                                "end": 43
                                            },
                                            "declarationList": {
                                                "kind": 156,
                                                "declarations": [
                                                    {
                                                        "kind": 157,
                                                        "binding": {
                                                            "kind": 201,
                                                            "elementList": {
                                                                "kind": 324,
                                                                "elements": [
                                                                    {
                                                                        "kind": 134299649,
                                                                        "text": "yield",
                                                                        "rawText": "yield",
                                                                        "flags": 96,
                                                                        "start": 45,
                                                                        "end": 50
                                                                    }
                                                                ],
                                                                "trailingComma": false,
                                                                "flags": 0,
                                                                "start": 45,
                                                                "end": 50
                                                            },
                                                            "flags": 32,
                                                            "start": 43,
                                                            "end": 51
                                                        },
                                                        "type": null,
                                                        "initializer": {
                                                            "kind": 119,
                                                            "elementList": {
                                                                "kind": 270,
                                                                "elements": [
                                                                    {
                                                                        "kind": 201392130,
                                                                        "text": 42,
                                                                        "rawText": "42",
                                                                        "flags": 96,
                                                                        "start": 55,
                                                                        "end": 57
                                                                    }
                                                                ],
                                                                "trailingComma": false,
                                                                "flags": 32,
                                                                "start": 55,
                                                                "end": 57
                                                            },
                                                            "flags": 32,
                                                            "start": 53,
                                                            "end": 58
                                                        },
                                                        "flags": 16,
                                                        "start": 43,
                                                        "end": 58
                                                    }
                                                ],
                                                "flags": 16,
                                                "start": 43,
                                                "end": 58
                                            },
                                            "flags": 16,
                                            "start": 39,
                                            "end": 59
                                        }
                                    ],
                                    "flags": 32,
                                    "start": 39,
                                    "end": 59
                                },
                                "flags": 32,
                                "start": 37,
                                "end": 61
                            },
                            "returnType": null,
                            "flags": 16,
                            "start": 18,
                            "end": 61
                        }
                    ],
                    "flags": 32,
                    "start": 18,
                    "end": 61
                },
                "flags": 32,
                "start": 16,
                "end": 62
            },
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 62
        }
    ],
    "isModule": false,
    "source": "function * gen() { function not_gen() { var [yield] = [42]; }}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 62
}
```

### Printed

```javascript

  function* gen() {
    function not_gen() {
      var [yield] = [42,];
    }
  }

```

### Diagnostics

```javascript
✔ No errors
```

