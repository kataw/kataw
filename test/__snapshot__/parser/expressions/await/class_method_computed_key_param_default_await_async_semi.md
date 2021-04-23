# Kataw parser test case

## Input

`````js
async function f(){
  (fail = class A {
    [x](y=await){};
    "x"(){}
  }) => {
  };
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
                "flags": 768,
                "start": 0,
                "end": 5
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 768,
                "start": 5,
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
                                    "flags": 768,
                                    "start": 76,
                                    "end": 79
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
                                            "flags": 768,
                                            "start": 27,
                                            "end": 29
                                        },
                                        "right": {
                                            "kind": 189,
                                            "decorators": null,
                                            "classKeyword": {
                                                "kind": 37822544,
                                                "flags": 768,
                                                "start": 29,
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
                                                        "asyncKeyword": null,
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
                                                                    "start": 45,
                                                                    "end": 46
                                                                },
                                                                "flags": 256,
                                                                "start": 39,
                                                                "end": 47
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
                                                                            "start": 48,
                                                                            "end": 49
                                                                        },
                                                                        "optionalToken": null,
                                                                        "type": null,
                                                                        "initializer": {
                                                                            "kind": 134299649,
                                                                            "text": "await",
                                                                            "rawText": "await",
                                                                            "flags": 768,
                                                                            "start": 50,
                                                                            "end": 55
                                                                        },
                                                                        "flags": 258,
                                                                        "start": 48,
                                                                        "end": 55
                                                                    }
                                                                ],
                                                                "trailingComma": false,
                                                                "flags": 258,
                                                                "start": 48,
                                                                "end": 56
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
                                                                    "start": 57,
                                                                    "end": 57
                                                                },
                                                                "flags": 256,
                                                                "start": 56,
                                                                "end": 58
                                                            },
                                                            "flags": 0,
                                                            "start": 47,
                                                            "end": 58
                                                        },
                                                        "flags": 256,
                                                        "start": 39,
                                                        "end": 58
                                                    },
                                                    {
                                                        "kind": 281,
                                                        "flags": 768,
                                                        "start": 58,
                                                        "end": 59
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
                                                                "flags": 769,
                                                                "start": 59,
                                                                "end": 67
                                                            },
                                                            "typeParameters": null,
                                                            "formalParameters": {
                                                                "kind": 214,
                                                                "formalParameterList": [],
                                                                "trailingComma": false,
                                                                "flags": 0,
                                                                "start": 68,
                                                                "end": 69
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
                                                                    "start": 70,
                                                                    "end": 70
                                                                },
                                                                "flags": 256,
                                                                "start": 69,
                                                                "end": 71
                                                            },
                                                            "flags": 0,
                                                            "start": 67,
                                                            "end": 71
                                                        },
                                                        "flags": 256,
                                                        "start": 59,
                                                        "end": 71
                                                    }
                                                ],
                                                "flags": 256,
                                                "start": 39,
                                                "end": 75
                                            },
                                            "flags": 256,
                                            "start": 29,
                                            "end": 75
                                        },
                                        "flags": 256,
                                        "start": 19,
                                        "end": 75
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
                                        "multiline": true,
                                        "flags": 256,
                                        "start": 81,
                                        "end": 81
                                    },
                                    "flags": 256,
                                    "start": 79,
                                    "end": 85
                                },
                                "flags": 256,
                                "start": 19,
                                "end": 85
                            },
                            "flags": 128,
                            "start": 19,
                            "end": 86
                        }
                    ],
                    "multiline": true,
                    "flags": 256,
                    "start": 19,
                    "end": 86
                },
                "flags": 256,
                "start": 18,
                "end": 88
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 1152,
            "start": 0,
            "end": 88
        }
    ],
    "isModule": false,
    "text": "async function f(){\n  (fail = class A {\n    [x](y=await){};\n    \"x\"(){}\n  }) => {\n  };\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 88
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

