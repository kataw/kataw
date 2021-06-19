# Kataw parser test case

## Input

`````js
async function f(){
  (fail = class A {[await x](){}; "x"(){}}) => {}
}
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
            "asyncKeyword": {
                "kind": 82031,
                "flags": 64,
                "start": 0,
                "end": 5
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 5,
                "end": 14
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 14,
                "end": 16
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
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
                                    "flags": 64,
                                    "start": 63,
                                    "end": 66
                                },
                                "typeParameters": null,
                                "parameters": [
                                    {
                                        "kind": 281,
                                        "ellipsisToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "fail",
                                            "rawText": "fail",
                                            "flags": 96,
                                            "start": 23,
                                            "end": 27
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": {
                                            "kind": 189,
                                            "decorators": null,
                                            "classKeyword": {
                                                "kind": 37822544,
                                                "flags": 64,
                                                "start": 29,
                                                "end": 35
                                            },
                                            "name": {
                                                "kind": 134299649,
                                                "text": "A",
                                                "rawText": "A",
                                                "flags": 96,
                                                "start": 35,
                                                "end": 37
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
                                                            "asteriskToken": null,
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
                                                                        "awaitKeyword": {
                                                                            "kind": 82196,
                                                                            "flags": 64,
                                                                            "start": 40,
                                                                            "end": 45
                                                                        },
                                                                        "expression": {
                                                                            "kind": 134299649,
                                                                            "text": "x",
                                                                            "rawText": "x",
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
                                                                    "formalParameters": [],
                                                                    "trailingComma": false,
                                                                    "flags": 0,
                                                                    "start": 49,
                                                                    "end": 50
                                                                },
                                                                "returnType": null,
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
                                                            "kind": 317,
                                                            "flags": 96,
                                                            "start": 52,
                                                            "end": 53
                                                        },
                                                        {
                                                            "kind": 278,
                                                            "declareToken": null,
                                                            "decorators": null,
                                                            "asteriskToken": null,
                                                            "staticKeyword": null,
                                                            "asyncKeyword": null,
                                                            "setKeyword": null,
                                                            "getKeyword": null,
                                                            "method": {
                                                                "kind": 209,
                                                                "name": {
                                                                    "kind": 201392131,
                                                                    "text": "x",
                                                                    "rawText": "\"x\"",
                                                                    "flags": 96,
                                                                    "start": 53,
                                                                    "end": 57
                                                                },
                                                                "typeParameters": null,
                                                                "formalParameters": {
                                                                    "kind": 214,
                                                                    "formalParameters": [],
                                                                    "trailingComma": false,
                                                                    "flags": 0,
                                                                    "start": 58,
                                                                    "end": 59
                                                                },
                                                                "returnType": null,
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
                                                    "end": 61
                                                },
                                                "flags": 37,
                                                "start": 32,
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
                                "asyncKeyword": null,
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

async function f() {
  (fail = class A {
    [await x] {}

    "\"x\"" {}
  }) =>  {};
}
```

### Diagnostics

```javascript
✔ No errors
```

