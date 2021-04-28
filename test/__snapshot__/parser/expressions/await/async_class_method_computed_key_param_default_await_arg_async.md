# Kataw parser test case

## Input

`````js
async function f(){
  (fail = class A {async [x](y=await z){}; "x"(){}}) => {}
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
                "flags": 0,
                "start": 512,
                "end": 5
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 5,
                "start": 0,
                "end": 14
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 768,
                "start": 14,
                "end": 16
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 256,
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
                                    "flags": 72,
                                    "start": 0,
                                    "end": 75
                                },
                                "typeParameters": null,
                                "parameters": [
                                    {
                                        "kind": 125,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "fail",
                                            "rawText": "fail",
                                            "flags": 768,
                                            "start": 23,
                                            "end": 27
                                        },
                                        "operatorToken": {
                                            "kind": 4125,
                                            "flags": 27,
                                            "start": 512,
                                            "end": 29
                                        },
                                        "right": {
                                            "kind": 189,
                                            "decorators": null,
                                            "classKeyword": {
                                                "kind": 37822544,
                                                "flags": 29,
                                                "start": 0,
                                                "end": 35
                                            },
                                            "name": {
                                                "kind": 134299649,
                                                "text": "A",
                                                "rawText": "A",
                                                "flags": 768,
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
                                                        "staticKeyword": null,
                                                        "asyncKeyword": {
                                                            "kind": 82031,
                                                            "flags": 39,
                                                            "start": 512,
                                                            "end": 44
                                                        },
                                                        "setKeyword": null,
                                                        "getKeyword": null,
                                                        "method": {
                                                            "kind": 209,
                                                            "name": {
                                                                "kind": 194,
                                                                "expression": {
                                                                    "kind": 134299649,
                                                                    "text": "x",
                                                                    "rawText": "x",
                                                                    "flags": 768,
                                                                    "start": 46,
                                                                    "end": 47
                                                                },
                                                                "flags": 256,
                                                                "start": 44,
                                                                "end": 48
                                                            },
                                                            "typeParameters": null,
                                                            "formalParameters": {
                                                                "kind": 214,
                                                                "formalParameterList": [
                                                                    {
                                                                        "kind": 215,
                                                                        "ellipsisToken": null,
                                                                        "binding": {
                                                                            "kind": 134299649,
                                                                            "text": "y",
                                                                            "rawText": "y",
                                                                            "flags": 768,
                                                                            "start": 49,
                                                                            "end": 50
                                                                        },
                                                                        "optionalToken": null,
                                                                        "type": null,
                                                                        "initializer": {
                                                                            "kind": 208,
                                                                            "awaitToken": {
                                                                                "kind": 82032,
                                                                                "flags": 51,
                                                                                "start": 0,
                                                                                "end": 56
                                                                            },
                                                                            "expression": {
                                                                                "kind": 134299649,
                                                                                "text": "z",
                                                                                "rawText": "z",
                                                                                "flags": 768,
                                                                                "start": 56,
                                                                                "end": 58
                                                                            },
                                                                            "flags": 256,
                                                                            "start": 51,
                                                                            "end": 58
                                                                        },
                                                                        "flags": 258,
                                                                        "start": 49,
                                                                        "end": 58
                                                                    }
                                                                ],
                                                                "trailingComma": false,
                                                                "flags": 2306,
                                                                "start": 49,
                                                                "end": 59
                                                            },
                                                            "type": null,
                                                            "contents": {
                                                                "kind": 216,
                                                                "functionStatementList": {
                                                                    "kind": 217,
                                                                    "directives": [],
                                                                    "statements": [],
                                                                    "multiline": false,
                                                                    "flags": 256,
                                                                    "start": 60,
                                                                    "end": 60
                                                                },
                                                                "flags": 256,
                                                                "start": 59,
                                                                "end": 61
                                                            },
                                                            "flags": 2048,
                                                            "start": 48,
                                                            "end": 61
                                                        },
                                                        "flags": 2048,
                                                        "start": 39,
                                                        "end": 61
                                                    },
                                                    {
                                                        "kind": 281,
                                                        "flags": 768,
                                                        "start": 61,
                                                        "end": 62
                                                    },
                                                    {
                                                        "kind": 278,
                                                        "declareToken": null,
                                                        "decorators": null,
                                                        "staticKeyword": null,
                                                        "asyncKeyword": null,
                                                        "setKeyword": null,
                                                        "getKeyword": null,
                                                        "method": {
                                                            "kind": 209,
                                                            "name": {
                                                                "kind": 201392131,
                                                                "text": "x",
                                                                "rawText": "x",
                                                                "flags": 768,
                                                                "start": 62,
                                                                "end": 66
                                                            },
                                                            "typeParameters": null,
                                                            "formalParameters": {
                                                                "kind": 214,
                                                                "formalParameterList": [],
                                                                "trailingComma": false,
                                                                "flags": 0,
                                                                "start": 67,
                                                                "end": 68
                                                            },
                                                            "type": null,
                                                            "contents": {
                                                                "kind": 216,
                                                                "functionStatementList": {
                                                                    "kind": 217,
                                                                    "directives": [],
                                                                    "statements": [],
                                                                    "multiline": false,
                                                                    "flags": 256,
                                                                    "start": 69,
                                                                    "end": 69
                                                                },
                                                                "flags": 256,
                                                                "start": 68,
                                                                "end": 70
                                                            },
                                                            "flags": 0,
                                                            "start": 66,
                                                            "end": 70
                                                        },
                                                        "flags": 0,
                                                        "start": 62,
                                                        "end": 70
                                                    }
                                                ],
                                                "flags": 256,
                                                "start": 39,
                                                "end": 71
                                            },
                                            "flags": 256,
                                            "start": 29,
                                            "end": 71
                                        },
                                        "flags": 256,
                                        "start": 19,
                                        "end": 71
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
                                        "multiline": false,
                                        "flags": 256,
                                        "start": 77,
                                        "end": 77
                                    },
                                    "flags": 256,
                                    "start": 75,
                                    "end": 78
                                },
                                "flags": 256,
                                "start": 19,
                                "end": 78
                            },
                            "flags": 128,
                            "start": 19,
                            "end": 78
                        }
                    ],
                    "multiline": true,
                    "flags": 256,
                    "start": 19,
                    "end": 78
                },
                "flags": 256,
                "start": 18,
                "end": 80
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 1152,
            "start": 0,
            "end": 80
        }
    ],
    "isModule": false,
    "text": "async function f(){\n  (fail = class A {async [x](y=await z){}; \"x\"(){}}) => {}\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 80
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

