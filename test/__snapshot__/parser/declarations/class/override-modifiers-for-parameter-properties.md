# Kataw parser test case

## Input

`````js
class D extends B {
  constructor(foo) {
    super(foo);
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
                "flags": 80,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "D",
                "rawText": "D",
                "flags": 96,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": {
                    "kind": 279,
                    "extendsKeyword": {
                        "kind": 4194391,
                        "flags": 80,
                        "start": 7,
                        "end": 15
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "B",
                        "rawText": "B",
                        "flags": 96,
                        "start": 15,
                        "end": 17
                    },
                    "typeParameter": null,
                    "flags": 16,
                    "start": 15,
                    "end": 17
                },
                "body": {
                    "kind": 262,
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
                                    "start": 19,
                                    "end": 33
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [
                                        {
                                            "kind": 134299649,
                                            "text": "foo",
                                            "rawText": "foo",
                                            "flags": 96,
                                            "start": 34,
                                            "end": 37
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 2144,
                                    "start": 34,
                                    "end": 38
                                },
                                "returnType": null,
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
                                                        "kind": 225,
                                                        "superKeyword": {
                                                            "kind": 4259935,
                                                            "flags": 97,
                                                            "start": 40,
                                                            "end": 50
                                                        },
                                                        "flags": 96,
                                                        "start": 40,
                                                        "end": 50
                                                    },
                                                    "argumentList": {
                                                        "kind": 256,
                                                        "elements": [
                                                            {
                                                                "kind": 134299649,
                                                                "text": "foo",
                                                                "rawText": "foo",
                                                                "flags": 96,
                                                                "start": 51,
                                                                "end": 54
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 51,
                                                        "end": 54
                                                    },
                                                    "flags": 268435488,
                                                    "start": 40,
                                                    "end": 55
                                                },
                                                "flags": 16,
                                                "start": 40,
                                                "end": 56
                                            }
                                        ],
                                        "flags": 33,
                                        "start": 40,
                                        "end": 56
                                    },
                                    "flags": 32,
                                    "start": 38,
                                    "end": 60
                                },
                                "flags": 2048,
                                "start": 33,
                                "end": 60
                            },
                            "flags": 2048,
                            "start": 19,
                            "end": 60
                        }
                    ],
                    "flags": 32,
                    "start": 19,
                    "end": 60
                },
                "flags": 7,
                "start": 32,
                "end": 62
            },
            "flags": 16,
            "start": 0,
            "end": 62
        }
    ],
    "isModule": false,
    "source": "class D extends B {\n  constructor(foo) {\n    super(foo);\n  }\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 62
}
```

### Printed

```javascript

class D  {
  constructor(foo) {
    super(foo);
  }
}
```

### Diagnostics

```javascript
✔ No errors
```

