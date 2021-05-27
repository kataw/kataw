# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-21
- From: d
- Path: r
> :: test: function generator
> :: case: var o = { *gf() { switch (1) { case yield: break; } } }
## Input

`````js
function * gen() { function not_gen() { var o = { *gf() { switch (1) { case yield: break; } } } }}
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
                "flags": 0,
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
                                "flags": 0,
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
                                            "kind": 155,
                                            "declareKeyword": null,
                                            "varKeyword": {
                                                "kind": 37757002,
                                                "flags": 0,
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
                                                            "text": "o",
                                                            "rawText": "o",
                                                            "flags": 96,
                                                            "start": 43,
                                                            "end": 45
                                                        },
                                                        "optionalToken": null,
                                                        "type": null,
                                                        "initializer": {
                                                            "kind": 220,
                                                            "propertyList": {
                                                                "kind": 218,
                                                                "properties": [
                                                                    {
                                                                        "kind": 257,
                                                                        "asyncKeyword": null,
                                                                        "generatorToken": {
                                                                            "kind": 67143222,
                                                                            "flags": 64,
                                                                            "start": 49,
                                                                            "end": 51
                                                                        },
                                                                        "getKeyword": null,
                                                                        "setKeyword": null,
                                                                        "method": {
                                                                            "kind": 209,
                                                                            "name": {
                                                                                "kind": 134299649,
                                                                                "text": "gf",
                                                                                "rawText": "gf",
                                                                                "flags": 96,
                                                                                "start": 51,
                                                                                "end": 53
                                                                            },
                                                                            "typeParameters": null,
                                                                            "formalParameters": {
                                                                                "kind": 214,
                                                                                "formalParameterList": [],
                                                                                "trailingComma": false,
                                                                                "flags": 160,
                                                                                "start": 54,
                                                                                "end": 55
                                                                            },
                                                                            "returnType": null,
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
                                                                                                "flags": 0,
                                                                                                "start": 57,
                                                                                                "end": 64
                                                                                            },
                                                                                            "expression": {
                                                                                                "kind": 201392130,
                                                                                                "text": 1,
                                                                                                "rawText": "1",
                                                                                                "flags": 96,
                                                                                                "start": 66,
                                                                                                "end": 67
                                                                                            },
                                                                                            "caseBlock": {
                                                                                                "kind": 152,
                                                                                                "clauses": [
                                                                                                    {
                                                                                                        "kind": 175,
                                                                                                        "caseKeyword": {
                                                                                                            "kind": 4194382,
                                                                                                            "flags": 0,
                                                                                                            "start": 70,
                                                                                                            "end": 75
                                                                                                        },
                                                                                                        "expression": {
                                                                                                            "kind": 229,
                                                                                                            "yieldKeyword": {
                                                                                                                "kind": 8454253,
                                                                                                                "flags": 0,
                                                                                                                "start": 75,
                                                                                                                "end": 81
                                                                                                            },
                                                                                                            "delegate": false,
                                                                                                            "asteriskToken": null,
                                                                                                            "expression": null,
                                                                                                            "flags": 32,
                                                                                                            "start": 75,
                                                                                                            "end": 81
                                                                                                        },
                                                                                                        "statements": [
                                                                                                            {
                                                                                                                "kind": 150,
                                                                                                                "breakKeyword": {
                                                                                                                    "kind": 37757005,
                                                                                                                    "flags": 0,
                                                                                                                    "start": 82,
                                                                                                                    "end": 88
                                                                                                                },
                                                                                                                "label": null,
                                                                                                                "flags": 16,
                                                                                                                "start": 82,
                                                                                                                "end": 89
                                                                                                            }
                                                                                                        ],
                                                                                                        "flags": 16,
                                                                                                        "start": 70,
                                                                                                        "end": 89
                                                                                                    }
                                                                                                ],
                                                                                                "flags": 16,
                                                                                                "start": 68,
                                                                                                "end": 91
                                                                                            },
                                                                                            "flags": 16,
                                                                                            "start": 57,
                                                                                            "end": 91
                                                                                        }
                                                                                    ],
                                                                                    "flags": 32,
                                                                                    "start": 57,
                                                                                    "end": 91
                                                                                },
                                                                                "flags": 32,
                                                                                "start": 55,
                                                                                "end": 93
                                                                            },
                                                                            "flags": 160,
                                                                            "start": 53,
                                                                            "end": 93
                                                                        },
                                                                        "flags": 32,
                                                                        "start": 49,
                                                                        "end": 93
                                                                    }
                                                                ],
                                                                "trailingComma": false,
                                                                "flags": 16,
                                                                "start": 49,
                                                                "end": 93
                                                            },
                                                            "flags": 48,
                                                            "start": 47,
                                                            "end": 95
                                                        },
                                                        "flags": 16,
                                                        "start": 43,
                                                        "end": 95
                                                    }
                                                ],
                                                "flags": 16,
                                                "start": 43,
                                                "end": 95
                                            },
                                            "flags": 16,
                                            "start": 39,
                                            "end": 95
                                        }
                                    ],
                                    "flags": 32,
                                    "start": 39,
                                    "end": 95
                                },
                                "flags": 32,
                                "start": 37,
                                "end": 97
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 16,
                            "start": 18,
                            "end": 97
                        }
                    ],
                    "flags": 32,
                    "start": 18,
                    "end": 97
                },
                "flags": 32,
                "start": 16,
                "end": 98
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 98
        }
    ],
    "isModule": false,
    "source": "function * gen() { function not_gen() { var o = { *gf() { switch (1) { case yield: break; } } } }}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 98
}
```

### Printed

```javascript

function * gen() {
  function not_gen() {
    var o = { * gf() {
        switch(1
          case  yield:
            break;

      } };
  }
}
```

### Diagnostics

```javascript
✔ No errors
```

