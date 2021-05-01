# Kataw parser test case

## Input

`````js
async function f(){
  (fail = class A {[await x](){}; "x"(){}}) => {}
}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 64,
                "start": 0,
                "end": 5
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 0,
                "start": 5,
                "end": 14
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "original": "f",
                "text": "f",
                "rawText": " f",
                "flags": 96,
                "start": 14,
                "end": 16
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
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
                                "kind": 271,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 0,
                                    "start": 63,
                                    "end": 66
                                },
                                "typeParameters": null,
                                "parameters": [
                                    {
                                        "kind": 125,
                                        "left": {
                                            "kind": 134299649,
                                            "original": "fail",
                                            "text": "fail",
                                            "rawText": "fail",
                                            "flags": 96,
                                            "start": 23,
                                            "end": 27
                                        },
                                        "operatorToken": {
                                            "kind": 4125,
                                            "flags": 64,
                                            "start": 27,
                                            "end": 29
                                        },
                                        "right": {
                                            "kind": 189,
                                            "decorators": null,
                                            "classKeyword": {
                                                "kind": 37822544,
                                                "flags": 0,
                                                "start": 29,
                                                "end": 35
                                            },
                                            "name": {
                                                "kind": 134299649,
                                                "original": "A",
                                                "text": "A",
                                                "rawText": " A",
                                                "flags": 96,
                                                "start": 35,
                                                "end": 37
                                            },
                                            "typeParameters": null,
                                            "classHeritage": null,
                                            "members": {
                                                "kind": 277,
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
                                                                "kind": 194,
                                                                "expression": {
                                                                    "kind": 208,
                                                                    "awaitToken": {
                                                                        "kind": 82032,
                                                                        "flags": 0,
                                                                        "start": 40,
                                                                        "end": 45
                                                                    },
                                                                    "expression": {
                                                                        "kind": 134299649,
                                                                        "original": "x",
                                                                        "text": "x",
                                                                        "rawText": " x",
                                                                        "flags": 96,
                                                                        "start": 45,
                                                                        "end": 47
                                                                    },
                                                                    "flags": 32,
                                                                    "start": 40,
                                                                    "end": 47
                                                                },
                                                                "flags": 32,
                                                                "start": 39,
                                                                "end": 48
                                                            },
                                                            "typeParameters": null,
                                                            "formalParameters": {
                                                                "kind": 214,
                                                                "formalParameterList": [],
                                                                "trailingComma": false,
                                                                "flags": 0,
                                                                "start": 49,
                                                                "end": 50
                                                            },
                                                            "type": null,
                                                            "contents": {
                                                                "kind": 216,
                                                                "functionStatementList": {
                                                                    "kind": 217,
                                                                    "directives": [],
                                                                    "statements": [],
                                                                    "flags": 32,
                                                                    "start": 51,
                                                                    "end": 51
                                                                },
                                                                "flags": 32,
                                                                "start": 50,
                                                                "end": 52
                                                            },
                                                            "flags": 0,
                                                            "start": 48,
                                                            "end": 52
                                                        },
                                                        "flags": 0,
                                                        "start": 39,
                                                        "end": 52
                                                    },
                                                    {
                                                        "kind": 281,
                                                        "flags": 96,
                                                        "start": 52,
                                                        "end": 53
                                                    },
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
                                                                "kind": 201392131,
                                                                "text": "x",
                                                                "original": "\"x\"",
                                                                "rawText": " \"x\"",
                                                                "flags": 96,
                                                                "start": 53,
                                                                "end": 57
                                                            },
                                                            "typeParameters": null,
                                                            "formalParameters": {
                                                                "kind": 214,
                                                                "formalParameterList": [],
                                                                "trailingComma": false,
                                                                "flags": 0,
                                                                "start": 58,
                                                                "end": 59
                                                            },
                                                            "type": null,
                                                            "contents": {
                                                                "kind": 216,
                                                                "functionStatementList": {
                                                                    "kind": 217,
                                                                    "directives": [],
                                                                    "statements": [],
                                                                    "flags": 32,
                                                                    "start": 60,
                                                                    "end": 60
                                                                },
                                                                "flags": 32,
                                                                "start": 59,
                                                                "end": 61
                                                            },
                                                            "flags": 0,
                                                            "start": 57,
                                                            "end": 61
                                                        },
                                                        "flags": 0,
                                                        "start": 53,
                                                        "end": 61
                                                    }
                                                ],
                                                "flags": 32,
                                                "start": 39,
                                                "end": 62
                                            },
                                            "flags": 32,
                                            "start": 29,
                                            "end": 62
                                        },
                                        "flags": 32,
                                        "start": 19,
                                        "end": 62
                                    }
                                ],
                                "asyncToken": null,
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 68,
                                        "end": 68
                                    },
                                    "flags": 32,
                                    "start": 66,
                                    "end": 69
                                },
                                "flags": 34,
                                "start": 19,
                                "end": 69
                            },
                            "flags": 16,
                            "start": 19,
                            "end": 69
                        }
                    ],
                    "flags": 33,
                    "start": 19,
                    "end": 69
                },
                "flags": 32,
                "start": 18,
                "end": 71
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 144,
            "start": 0,
            "end": 71
        }
    ],
    "isModule": false,
    "source": "async function f(){\n  (fail = class A {[await x](){}; \"x\"(){}}) => {}\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 71
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

