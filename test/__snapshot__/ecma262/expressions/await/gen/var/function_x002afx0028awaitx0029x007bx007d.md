# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/await/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/await/gen/var
> :: test: var
> :: case: function *f(await){}
## Options

`````js
{}
`````
## Input

`````js
var await; var f = (async function() { function *f(await){} });
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
                                                "asteriskToken": {
                                                    "kind": 67143222,
                                                    "flags": 64,
                                                    "start": 47,
                                                    "end": 49
                                                },
                                                "name": {
                                                    "kind": 134299649,
                                                    "text": "f",
                                                    "rawText": "f",
                                                    "flags": 96,
                                                    "start": 49,
                                                    "end": 50
                                                },
                                                "typeParameters": null,
                                                "formalParameterList": {
                                                    "kind": 214,
                                                    "formalParameters": [
                                                        {
                                                            "kind": 134299649,
                                                            "text": "await",
                                                            "rawText": "await",
                                                            "flags": 96,
                                                            "start": 51,
                                                            "end": 56
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "start": 51,
                                                    "end": 56
                                                },
                                                "contents": {
                                                    "kind": 216,
                                                    "functionStatementList": {
                                                        "kind": 217,
                                                        "directives": [],
                                                        "statements": [],
                                                        "flags": 32,
                                                        "start": 58,
                                                        "end": 58
                                                    },
                                                    "flags": 32,
                                                    "start": 57,
                                                    "end": 59
                                                },
                                                "returnType": null,
                                                "flags": 272,
                                                "start": 38,
                                                "end": 59
                                            }
                                        ],
                                        "flags": 32,
                                        "start": 38,
                                        "end": 59
                                    },
                                    "flags": 32,
                                    "start": 36,
                                    "end": 61
                                },
                                "returnType": null,
                                "flags": 160,
                                "start": 20,
                                "end": 61
                            },
                            "flags": 18,
                            "start": 32,
                            "end": 62
                        },
                        "flags": 16,
                        "start": 14,
                        "end": 62
                    }
                ],
                "flags": 16,
                "start": 14,
                "end": 62
            },
            "flags": 16,
            "start": 10,
            "end": 63
        }
    ],
    "isModule": false,
    "source": "var await; var f = (async function() { function *f(await){} });",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 63
}
```

### Printed

```javascript

var await;
var f = (async function () {
      function * f(await) {}
    });

```

### Diagnostics

```javascript
✔ No errors
```

