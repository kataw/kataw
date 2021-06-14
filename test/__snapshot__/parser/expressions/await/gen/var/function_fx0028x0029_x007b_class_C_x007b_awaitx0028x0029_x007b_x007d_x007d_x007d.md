# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/await/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/await/gen/var
> :: test: var
> :: case: function f() { class C { await() { } } }
## Options

`````js
{}
`````
## Input

`````js
var await; var f = (async function() { function f() { class C { await() { } } } });
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "await",
                            "rawText": "await",
                            "flags": 96,
                            "start": 3,
                            "end": 9
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 3,
                        "end": 9
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 9
            },
            "flags": 16,
            "start": 0,
            "end": 10
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
                "start": 10,
                "end": 14
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "f",
                            "rawText": "f",
                            "flags": 96,
                            "start": 14,
                            "end": 16
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 121,
                            "expression": {
                                "kind": 177,
                                "asyncKeyword": {
                                    "kind": 82031,
                                    "flags": 64,
                                    "start": 20,
                                    "end": 25
                                },
                                "functionKeyword": {
                                    "kind": 37822554,
                                    "flags": 64,
                                    "start": 25,
                                    "end": 34
                                },
                                "generatorToken": null,
                                "name": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 34,
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
                                                    "start": 38,
                                                    "end": 47
                                                },
                                                "generatorToken": null,
                                                "name": {
                                                    "kind": 134299649,
                                                    "text": "f",
                                                    "rawText": "f",
                                                    "flags": 96,
                                                    "start": 47,
                                                    "end": 49
                                                },
                                                "formalParameters": {
                                                    "kind": 214,
                                                    "formalParameterList": [],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "start": 49,
                                                    "end": 51
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
                                                                    "start": 53,
                                                                    "end": 59
                                                                },
                                                                "name": {
                                                                    "kind": 134299649,
                                                                    "text": "C",
                                                                    "rawText": "C",
                                                                    "flags": 96,
                                                                    "start": 59,
                                                                    "end": 61
                                                                },
                                                                "typeParameters": null,
                                                                "tail": {
                                                                    "kind": 277,
                                                                    "classHeritage": null,
                                                                    "body": {
                                                                        "kind": 303,
                                                                        "elements": [
                                                                            {
                                                                                "kind": 278,
                                                                                "declareToken": null,
                                                                                "decorators": null,
                                                                                "generatorToken": null,
                                                                                "staticKeyword": null,
                                                                                "asyncKeyword": null,
                                                                                "setKeyword": null,
                                                                                "getKeyword": null,
                                                                                "method": {
                                                                                    "kind": 209,
                                                                                    "name": {
                                                                                        "kind": 134299649,
                                                                                        "text": "await",
                                                                                        "rawText": "await",
                                                                                        "flags": 96,
                                                                                        "start": 63,
                                                                                        "end": 69
                                                                                    },
                                                                                    "typeParameters": null,
                                                                                    "formalParameters": {
                                                                                        "kind": 214,
                                                                                        "formalParameterList": [],
                                                                                        "trailingComma": false,
                                                                                        "flags": 0,
                                                                                        "start": 70,
                                                                                        "end": 71
                                                                                    },
                                                                                    "returnType": null,
                                                                                    "contents": {
                                                                                        "kind": 216,
                                                                                        "functionStatementList": {
                                                                                            "kind": 217,
                                                                                            "directives": [],
                                                                                            "statements": [],
                                                                                            "flags": 32,
                                                                                            "start": 73,
                                                                                            "end": 73
                                                                                        },
                                                                                        "flags": 32,
                                                                                        "start": 71,
                                                                                        "end": 75
                                                                                    },
                                                                                    "flags": 0,
                                                                                    "start": 69,
                                                                                    "end": 75
                                                                                },
                                                                                "flags": 0,
                                                                                "start": 63,
                                                                                "end": 75
                                                                            }
                                                                        ],
                                                                        "flags": 32,
                                                                        "start": 63,
                                                                        "end": 75
                                                                    },
                                                                    "flags": 61,
                                                                    "start": 32,
                                                                    "end": 77
                                                                },
                                                                "flags": 16,
                                                                "start": 53,
                                                                "end": 77
                                                            }
                                                        ],
                                                        "flags": 32,
                                                        "start": 53,
                                                        "end": 77
                                                    },
                                                    "flags": 32,
                                                    "start": 51,
                                                    "end": 79
                                                },
                                                "typeParameters": null,
                                                "returnType": null,
                                                "flags": 16,
                                                "start": 38,
                                                "end": 79
                                            }
                                        ],
                                        "flags": 32,
                                        "start": 38,
                                        "end": 79
                                    },
                                    "flags": 32,
                                    "start": 36,
                                    "end": 81
                                },
                                "typeParameters": null,
                                "returnType": null,
                                "flags": 160,
                                "start": 20,
                                "end": 81
                            },
                            "flags": 32,
                            "start": 18,
                            "end": 82
                        },
                        "flags": 16,
                        "start": 14,
                        "end": 82
                    }
                ],
                "flags": 16,
                "start": 14,
                "end": 82
            },
            "flags": 16,
            "start": 10,
            "end": 83
        }
    ],
    "isModule": false,
    "source": "var await; var f = (async function() { function f() { class C { await() { } } } });",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 83
}
```

### Printed

```javascript

var await;
var f = (async function () {
    function f() {
      class C {
        await() {}
      }
    }
  });
```

### Diagnostics

```javascript
✔ No errors
```

