# Kataw parser test case

## Input

`````js
async function f(){
  (fail = class A {[x](await){}; "x"(){}}) => {}
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
                "start": 17,
                "end": 17
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
                                "asyncKeyword": null,
                                "typeParameters": null,
                                "arrowPatameterList": {
                                    "kind": 342,
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
                                                                "staticKeyword": null,
                                                                "asyncKeyword": null,
                                                                "setKeyword": null,
                                                                "getKeyword": null,
                                                                "asteriskToken": null,
                                                                "method": {
                                                                    "kind": 209,
                                                                    "name": {
                                                                        "kind": 194,
                                                                        "expression": {
                                                                            "kind": 134299649,
                                                                            "text": "x",
                                                                            "rawText": "x",
                                                                            "flags": 96,
                                                                            "start": 40,
                                                                            "end": 41
                                                                        },
                                                                        "flags": 32,
                                                                        "start": 39,
                                                                        "end": 42
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
                                                                                "start": 43,
                                                                                "end": 48
                                                                            }
                                                                        ],
                                                                        "trailingComma": false,
                                                                        "flags": 96,
                                                                        "start": 43,
                                                                        "end": 49
                                                                    },
                                                                    "returnType": null,
                                                                    "contents": {
                                                                        "kind": 216,
                                                                        "functionStatementList": {
                                                                            "kind": 217,
                                                                            "directives": [],
                                                                            "statements": [],
                                                                            "flags": 32,
                                                                            "start": 50,
                                                                            "end": 50
                                                                        },
                                                                        "flags": 32,
                                                                        "start": 49,
                                                                        "end": 51
                                                                    },
                                                                    "flags": 0,
                                                                    "start": 42,
                                                                    "end": 51
                                                                },
                                                                "flags": 0,
                                                                "start": 39,
                                                                "end": 51
                                                            },
                                                            {
                                                                "kind": 317,
                                                                "flags": 96,
                                                                "start": 51,
                                                                "end": 52
                                                            },
                                                            {
                                                                "kind": 278,
                                                                "declareToken": null,
                                                                "decorators": null,
                                                                "staticKeyword": null,
                                                                "asyncKeyword": null,
                                                                "setKeyword": null,
                                                                "getKeyword": null,
                                                                "asteriskToken": null,
                                                                "method": {
                                                                    "kind": 209,
                                                                    "name": {
                                                                        "kind": 201392131,
                                                                        "text": "x",
                                                                        "rawText": "\"x\"",
                                                                        "flags": 96,
                                                                        "start": 52,
                                                                        "end": 56
                                                                    },
                                                                    "typeParameters": null,
                                                                    "formalParameterList": {
                                                                        "kind": 214,
                                                                        "formalParameters": [],
                                                                        "trailingComma": false,
                                                                        "flags": 0,
                                                                        "start": 57,
                                                                        "end": 58
                                                                    },
                                                                    "returnType": null,
                                                                    "contents": {
                                                                        "kind": 216,
                                                                        "functionStatementList": {
                                                                            "kind": 217,
                                                                            "directives": [],
                                                                            "statements": [],
                                                                            "flags": 32,
                                                                            "start": 59,
                                                                            "end": 59
                                                                        },
                                                                        "flags": 32,
                                                                        "start": 58,
                                                                        "end": 60
                                                                    },
                                                                    "flags": 0,
                                                                    "start": 56,
                                                                    "end": 60
                                                                },
                                                                "flags": 0,
                                                                "start": 52,
                                                                "end": 60
                                                            }
                                                        ],
                                                        "flags": 32,
                                                        "start": 39,
                                                        "end": 60
                                                    },
                                                    "flags": 37,
                                                    "start": 32,
                                                    "end": 61
                                                },
                                                "flags": 32,
                                                "start": 29,
                                                "end": 61
                                            },
                                            "flags": 32,
                                            "start": 19,
                                            "end": 61
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 2,
                                    "start": 23,
                                    "end": 62
                                },
                                "returnType": null,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "start": 62,
                                    "end": 65
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 67,
                                        "end": 67
                                    },
                                    "flags": 32,
                                    "start": 65,
                                    "end": 68
                                },
                                "flags": 34,
                                "start": 19,
                                "end": 68
                            },
                            "flags": 16,
                            "start": 19,
                            "end": 68
                        }
                    ],
                    "flags": 33,
                    "start": 19,
                    "end": 68
                },
                "flags": 32,
                "start": 18,
                "end": 70
            },
            "returnType": null,
            "flags": 144,
            "start": 0,
            "end": 70
        }
    ],
    "isModule": false,
    "source": "async function f(){\n  (fail = class A {[x](await){}; \"x\"(){}}) => {}\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 70
}
```

### Printed

```javascript

async function f() {
  () =>  {};
}
```

### Diagnostics

```javascript
✔ No errors
```

