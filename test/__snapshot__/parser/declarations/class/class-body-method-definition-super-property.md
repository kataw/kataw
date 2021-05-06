# Kataw parser test case

## Input

`````js
class A {
  constructor() {
    super.toString();
  }
  dontDoThis() {
    super.makeBugs = 1;
  }
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
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 0,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "A",
                "rawText": "A",
                "flags": 96,
                "start": 5,
                "end": 7
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
                                "kind": 134299649,
                                "text": "constructor",
                                "rawText": "constructor",
                                "flags": 96,
                                "start": 9,
                                "end": 23
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 2048,
                                "start": 24,
                                "end": 25
                            },
                            "type": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 131,
                                                "expression": {
                                                    "kind": 129,
                                                    "member": {
                                                        "kind": 225,
                                                        "superKeyword": {
                                                            "kind": 4259935,
                                                            "flags": 1,
                                                            "start": 27,
                                                            "end": 37
                                                        },
                                                        "flags": 96,
                                                        "start": 27,
                                                        "end": 37
                                                    },
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "toString",
                                                        "rawText": "toString",
                                                        "flags": 96,
                                                        "start": 38,
                                                        "end": 46
                                                    },
                                                    "flags": 32,
                                                    "start": 27,
                                                    "end": 46
                                                },
                                                "argumentList": {
                                                    "kind": 256,
                                                    "elements": [],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "start": 47,
                                                    "end": 47
                                                },
                                                "flags": 32,
                                                "start": 27,
                                                "end": 48
                                            },
                                            "flags": 16,
                                            "start": 27,
                                            "end": 49
                                        }
                                    ],
                                    "flags": 33,
                                    "start": 27,
                                    "end": 49
                                },
                                "flags": 32,
                                "start": 25,
                                "end": 53
                            },
                            "flags": 2048,
                            "start": 23,
                            "end": 53
                        },
                        "flags": 2048,
                        "start": 9,
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
                                "kind": 134299649,
                                "text": "dontDoThis",
                                "rawText": "dontDoThis",
                                "flags": 96,
                                "start": 53,
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
                                    "statements": [
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 125,
                                                "left": {
                                                    "kind": 129,
                                                    "member": {
                                                        "kind": 225,
                                                        "superKeyword": {
                                                            "kind": 4259935,
                                                            "flags": 1,
                                                            "start": 70,
                                                            "end": 80
                                                        },
                                                        "flags": 96,
                                                        "start": 70,
                                                        "end": 80
                                                    },
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "makeBugs",
                                                        "rawText": "makeBugs",
                                                        "flags": 96,
                                                        "start": 81,
                                                        "end": 89
                                                    },
                                                    "flags": 32,
                                                    "start": 70,
                                                    "end": 89
                                                },
                                                "operatorToken": {
                                                    "kind": 4125,
                                                    "flags": 64,
                                                    "start": 89,
                                                    "end": 91
                                                },
                                                "right": {
                                                    "kind": 201392130,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 96,
                                                    "start": 91,
                                                    "end": 93
                                                },
                                                "flags": 32,
                                                "start": 70,
                                                "end": 93
                                            },
                                            "flags": 16,
                                            "start": 70,
                                            "end": 94
                                        }
                                    ],
                                    "flags": 33,
                                    "start": 70,
                                    "end": 94
                                },
                                "flags": 32,
                                "start": 68,
                                "end": 98
                            },
                            "flags": 0,
                            "start": 66,
                            "end": 98
                        },
                        "flags": 0,
                        "start": 53,
                        "end": 98
                    }
                ],
                "flags": 32,
                "start": 9,
                "end": 100
            },
            "flags": 16,
            "start": 0,
            "end": 100
        }
    ],
    "isModule": false,
    "source": "class A {\n  constructor() {\n    super.toString();\n  }\n  dontDoThis() {\n    super.makeBugs = 1;\n  }\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 100
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

