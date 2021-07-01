# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/await/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/await/gen/var
> :: test: var
> :: case: function f() { var await; }
## Options

`````js
{}
`````
## Input

`````js
var await; var f = (async function() { function f() { var await; } });
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
                                "asteriskToken": null,
                                "name": null,
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 35,
                                    "end": 35
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
                                                "asteriskToken": null,
                                                "name": {
                                                    "kind": 134299649,
                                                    "text": "f",
                                                    "rawText": "f",
                                                    "flags": 96,
                                                    "start": 47,
                                                    "end": 49
                                                },
                                                "typeParameters": null,
                                                "formalParameterList": {
                                                    "kind": 214,
                                                    "formalParameters": [],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "start": 50,
                                                    "end": 50
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
                                                                    "start": 53,
                                                                    "end": 57
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
                                                                                "start": 57,
                                                                                "end": 63
                                                                            },
                                                                            "type": null,
                                                                            "initializer": null,
                                                                            "flags": 16,
                                                                            "start": 57,
                                                                            "end": 63
                                                                        }
                                                                    ],
                                                                    "flags": 16,
                                                                    "start": 57,
                                                                    "end": 63
                                                                },
                                                                "flags": 16,
                                                                "start": 53,
                                                                "end": 64
                                                            }
                                                        ],
                                                        "flags": 32,
                                                        "start": 53,
                                                        "end": 64
                                                    },
                                                    "flags": 32,
                                                    "start": 51,
                                                    "end": 66
                                                },
                                                "returnType": null,
                                                "flags": 16,
                                                "start": 38,
                                                "end": 66
                                            }
                                        ],
                                        "flags": 32,
                                        "start": 38,
                                        "end": 66
                                    },
                                    "flags": 32,
                                    "start": 36,
                                    "end": 68
                                },
                                "returnType": null,
                                "flags": 160,
                                "start": 20,
                                "end": 68
                            },
                            "flags": 32,
                            "start": 18,
                            "end": 69
                        },
                        "flags": 16,
                        "start": 14,
                        "end": 69
                    }
                ],
                "flags": 16,
                "start": 14,
                "end": 69
            },
            "flags": 16,
            "start": 10,
            "end": 70
        }
    ],
    "isModule": false,
    "source": "var await; var f = (async function() { function f() { var await; } });",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 70
}
```

### Printed

```javascript

var await;
var f = (async function () {
  function f() {
    var await;
  }
});

```

### Diagnostics

```javascript
✔ No errors
```

