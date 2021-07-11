# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/yield/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/yield/gen/function_generator
> :: test: function generator
> :: case: var gfe = function* rgfe() { switch (1) { case yield* 'foo': break; } }
## Options

`````js
{}
`````
## Input

`````js
function * gen() { function not_gen() { var gfe = function* rgfe() { switch (1) { case yield* 'foo': break; } } }}
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
                                                            "kind": 134299649,
                                                            "text": "gfe",
                                                            "rawText": "gfe",
                                                            "flags": 96,
                                                            "start": 43,
                                                            "end": 47
                                                        },
                                                        "type": null,
                                                        "initializer": {
                                                            "kind": 177,
                                                            "asyncKeyword": null,
                                                            "functionKeyword": {
                                                                "kind": 37822554,
                                                                "flags": 64,
                                                                "start": 49,
                                                                "end": 58
                                                            },
                                                            "asteriskToken": {
                                                                "kind": 67143222,
                                                                "flags": 64,
                                                                "start": 58,
                                                                "end": 59
                                                            },
                                                            "name": {
                                                                "kind": 134299649,
                                                                "text": "rgfe",
                                                                "rawText": "rgfe",
                                                                "flags": 96,
                                                                "start": 59,
                                                                "end": 64
                                                            },
                                                            "typeParameters": null,
                                                            "formalParameterList": {
                                                                "kind": 214,
                                                                "formalParameters": [],
                                                                "trailingComma": false,
                                                                "flags": 32,
                                                                "start": 65,
                                                                "end": 65
                                                            },
                                                            "contents": {
                                                                "kind": 216,
                                                                "functionStatementList": {
                                                                    "kind": 217,
                                                                    "directives": [],
                                                                    "statements": [
                                                                        {
                                                                            "kind": 160,
                                                                            "switchKeyword": {
                                                                                "kind": 37757024,
                                                                                "flags": 80,
                                                                                "start": 68,
                                                                                "end": 75
                                                                            },
                                                                            "expression": {
                                                                                "kind": 201392130,
                                                                                "text": 1,
                                                                                "rawText": "1",
                                                                                "flags": 96,
                                                                                "start": 77,
                                                                                "end": 78
                                                                            },
                                                                            "caseBlock": {
                                                                                "kind": 152,
                                                                                "clauses": [
                                                                                    {
                                                                                        "kind": 175,
                                                                                        "caseKeyword": {
                                                                                            "kind": 4194382,
                                                                                            "flags": 80,
                                                                                            "start": 81,
                                                                                            "end": 86
                                                                                        },
                                                                                        "expression": {
                                                                                            "kind": 229,
                                                                                            "yieldKeyword": {
                                                                                                "kind": 8454253,
                                                                                                "flags": 64,
                                                                                                "start": 86,
                                                                                                "end": 92
                                                                                            },
                                                                                            "delegate": true,
                                                                                            "asteriskToken": {
                                                                                                "kind": 67143222,
                                                                                                "flags": 64,
                                                                                                "start": 92,
                                                                                                "end": 93
                                                                                            },
                                                                                            "expression": {
                                                                                                "kind": 201392131,
                                                                                                "text": "foo",
                                                                                                "rawText": "'foo'",
                                                                                                "flags": 4194400,
                                                                                                "start": 93,
                                                                                                "end": 99
                                                                                            },
                                                                                            "flags": 32,
                                                                                            "start": 86,
                                                                                            "end": 99
                                                                                        },
                                                                                        "colonToken": {
                                                                                            "kind": 21,
                                                                                            "flags": 64,
                                                                                            "start": 99,
                                                                                            "end": 100
                                                                                        },
                                                                                        "statements": [
                                                                                            {
                                                                                                "kind": 150,
                                                                                                "breakKeyword": {
                                                                                                    "kind": 37757005,
                                                                                                    "flags": 80,
                                                                                                    "start": 100,
                                                                                                    "end": 106
                                                                                                },
                                                                                                "label": null,
                                                                                                "flags": 16,
                                                                                                "start": 100,
                                                                                                "end": 107
                                                                                            }
                                                                                        ],
                                                                                        "flags": 16,
                                                                                        "start": 81,
                                                                                        "end": 107
                                                                                    }
                                                                                ],
                                                                                "flags": 16,
                                                                                "start": 81,
                                                                                "end": 107
                                                                            },
                                                                            "flags": 80,
                                                                            "start": 68,
                                                                            "end": 109
                                                                        }
                                                                    ],
                                                                    "flags": 32,
                                                                    "start": 68,
                                                                    "end": 109
                                                                },
                                                                "flags": 32,
                                                                "start": 66,
                                                                "end": 111
                                                            },
                                                            "returnType": null,
                                                            "flags": 288,
                                                            "start": 49,
                                                            "end": 111
                                                        },
                                                        "flags": 16,
                                                        "start": 43,
                                                        "end": 111
                                                    }
                                                ],
                                                "flags": 16,
                                                "start": 43,
                                                "end": 111
                                            },
                                            "flags": 16,
                                            "start": 39,
                                            "end": 111
                                        }
                                    ],
                                    "flags": 32,
                                    "start": 39,
                                    "end": 111
                                },
                                "flags": 32,
                                "start": 37,
                                "end": 113
                            },
                            "returnType": null,
                            "flags": 16,
                            "start": 18,
                            "end": 113
                        }
                    ],
                    "flags": 32,
                    "start": 18,
                    "end": 113
                },
                "flags": 32,
                "start": 16,
                "end": 114
            },
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 114
        }
    ],
    "isModule": false,
    "source": "function * gen() { function not_gen() { var gfe = function* rgfe() { switch (1) { case yield* 'foo': break; } } }}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 114
}
```

### Printed

```javascript

function * gen() {
  function not_gen() {
    var gfe = function * rgfe() {
      switch (1) {
        case yield *  "'foo'": 
          break;
      }
    };
  }
}

```

### Diagnostics

```javascript
✔ No errors
```

