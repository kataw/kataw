# Kataw parser test case

## Input

`````js
(fail = class A {[await](){}; "x"(){}}) => {}
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 0,
                    "start": 39,
                    "end": 42
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 125,
                        "left": {
                            "kind": 134299649,
                            "text": "fail",
                            "rawText": "fail",
                            "flags": 96,
                            "start": 1,
                            "end": 5
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "flags": 64,
                            "start": 5,
                            "end": 7
                        },
                        "right": {
                            "kind": 189,
                            "decorators": null,
                            "classKeyword": {
                                "kind": 37822544,
                                "flags": 0,
                                "start": 7,
                                "end": 13
                            },
                            "name": {
                                "kind": 134299649,
                                "text": "A",
                                "rawText": "A",
                                "flags": 96,
                                "start": 13,
                                "end": 15
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
                                                    "kind": 134299649,
                                                    "text": "await",
                                                    "rawText": "await",
                                                    "flags": 96,
                                                    "start": 18,
                                                    "end": 23
                                                },
                                                "flags": 32,
                                                "start": 17,
                                                "end": 24
                                            },
                                            "typeParameters": null,
                                            "formalParameters": {
                                                "kind": 214,
                                                "formalParameterList": [],
                                                "trailingComma": false,
                                                "flags": 0,
                                                "start": 25,
                                                "end": 26
                                            },
                                            "type": null,
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [],
                                                    "flags": 32,
                                                    "start": 27,
                                                    "end": 27
                                                },
                                                "flags": 32,
                                                "start": 26,
                                                "end": 28
                                            },
                                            "flags": 0,
                                            "start": 24,
                                            "end": 28
                                        },
                                        "flags": 0,
                                        "start": 17,
                                        "end": 28
                                    },
                                    {
                                        "kind": 281,
                                        "flags": 96,
                                        "start": 28,
                                        "end": 29
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
                                                "rawText": "\"x\"",
                                                "flags": 96,
                                                "start": 29,
                                                "end": 33
                                            },
                                            "typeParameters": null,
                                            "formalParameters": {
                                                "kind": 214,
                                                "formalParameterList": [],
                                                "trailingComma": false,
                                                "flags": 0,
                                                "start": 34,
                                                "end": 35
                                            },
                                            "type": null,
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [],
                                                    "flags": 32,
                                                    "start": 36,
                                                    "end": 36
                                                },
                                                "flags": 32,
                                                "start": 35,
                                                "end": 37
                                            },
                                            "flags": 0,
                                            "start": 33,
                                            "end": 37
                                        },
                                        "flags": 0,
                                        "start": 29,
                                        "end": 37
                                    }
                                ],
                                "flags": 32,
                                "start": 17,
                                "end": 38
                            },
                            "flags": 32,
                            "start": 7,
                            "end": 38
                        },
                        "flags": 32,
                        "start": 0,
                        "end": 38
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
                        "start": 44,
                        "end": 44
                    },
                    "flags": 32,
                    "start": 42,
                    "end": 45
                },
                "flags": 34,
                "start": 0,
                "end": 45
            },
            "flags": 16,
            "start": 0,
            "end": 45
        }
    ],
    "isModule": false,
    "source": "(fail = class A {[await](){}; \"x\"(){}}) => {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 45
}
```

### Printed

```javascript

(fail = class A {
  [await]() {}

  "\"x\""() {}
}) =>  {};
```

### Diagnostics

```javascript
✔ No errors
```

