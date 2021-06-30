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
                                                                            "start": 45,
                                                                            "end": 46
                                                                        },
                                                                        "flags": 32,
                                                                        "start": 39,
                                                                        "end": 47
                                                                    },
                                                                    "typeParameters": null,
                                                                    "formalParameterList": {
                                                                        "kind": 214,
                                                                        "formalParameters": [
                                                                            {
                                                                                "kind": 281,
                                                                                "ellipsisToken": null,
                                                                                "left": {
                                                                                    "kind": 134299649,
                                                                                    "text": "y",
                                                                                    "rawText": "y",
                                                                                    "flags": 96,
                                                                                    "start": 48,
                                                                                    "end": 49
                                                                                },
                                                                                "optionalToken": null,
                                                                                "type": null,
                                                                                "right": {
                                                                                    "kind": 134299649,
                                                                                    "text": "await",
                                                                                    "rawText": "await",
                                                                                    "flags": 96,
                                                                                    "start": 50,
                                                                                    "end": 55
                                                                                },
                                                                                "flags": 34,
                                                                                "start": 48,
                                                                                "end": 55
                                                                            }
                                                                        ],
                                                                        "trailingComma": false,
                                                                        "flags": 34,
                                                                        "start": 48,
                                                                        "end": 56
                                                                    },
                                                                    "returnType": null,
                                                                    "contents": {
                                                                        "kind": 216,
                                                                        "functionStatementList": {
                                                                            "kind": 217,
                                                                            "directives": [],
                                                                            "statements": [],
                                                                            "flags": 32,
                                                                            "start": 57,
                                                                            "end": 57
                                                                        },
                                                                        "flags": 32,
                                                                        "start": 56,
                                                                        "end": 58
                                                                    },
                                                                    "flags": 0,
                                                                    "start": 47,
                                                                    "end": 58
                                                                },
                                                                "flags": 0,
                                                                "start": 39,
                                                                "end": 58
                                                            },
                                                            {
                                                                "kind": 1108353041,
                                                                "flags": 64,
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
                                                                "asteriskToken": null,
                                                                "method": {
                                                                    "kind": 209,
                                                                    "name": {
                                                                        "kind": 201392131,
                                                                        "text": "x",
                                                                        "rawText": "\"x\"",
                                                                        "flags": 97,
                                                                        "start": 59,
                                                                        "end": 67
                                                                    },
                                                                    "typeParameters": null,
                                                                    "formalParameterList": {
                                                                        "kind": 214,
                                                                        "formalParameters": [],
                                                                        "trailingComma": false,
                                                                        "flags": 0,
                                                                        "start": 68,
                                                                        "end": 69
                                                                    },
                                                                    "returnType": null,
                                                                    "contents": {
                                                                        "kind": 216,
                                                                        "functionStatementList": {
                                                                            "kind": 217,
                                                                            "directives": [],
                                                                            "statements": [],
                                                                            "flags": 32,
                                                                            "start": 70,
                                                                            "end": 70
                                                                        },
                                                                        "flags": 32,
                                                                        "start": 69,
                                                                        "end": 71
                                                                    },
                                                                    "flags": 0,
                                                                    "start": 67,
                                                                    "end": 71
                                                                },
                                                                "flags": 0,
                                                                "start": 59,
                                                                "end": 71
                                                            }
                                                        ],
                                                        "flags": 32,
                                                        "start": 39,
                                                        "end": 71
                                                    },
                                                    "flags": 37,
                                                    "start": 32,
                                                    "end": 75
                                                },
                                                "flags": 32,
                                                "start": 29,
                                                "end": 75
                                            },
                                            "flags": 32,
                                            "start": 19,
                                            "end": 75
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 2,
                                    "start": 23,
                                    "end": 76
                                },
                                "returnType": null,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "start": 76,
                                    "end": 79
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 33,
                                        "start": 81,
                                        "end": 81
                                    },
                                    "flags": 32,
                                    "start": 79,
                                    "end": 85
                                },
                                "flags": 34,
                                "start": 19,
                                "end": 85
                            },
                            "flags": 16,
                            "start": 19,
                            "end": 86
                        }
                    ],
                    "flags": 33,
                    "start": 19,
                    "end": 86
                },
                "flags": 32,
                "start": 18,
                "end": 88
            },
            "returnType": null,
            "flags": 144,
            "start": 0,
            "end": 88
        }
    ],
    "isModule": false,
    "source": "async function f(){\n  (fail = class A {\n    [x](y=await){};\n    \"x\"(){}\n  }) => {\n  };\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 88
}
```

### Printed

```javascript

async function f() {
  (fail = class A {
      [x](y = await) { }
      ;
      '"x"'() { }
    }) =>  {
  };
}

```

### Diagnostics

```javascript
✔ No errors
```

