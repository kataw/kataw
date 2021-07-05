# Kataw parser test case

## Input

`````js
class A {}
class B extends A {
  constructor() {
    super();
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
                "text": "A",
                "rawText": "A",
                "flags": 96,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [],
                    "flags": 32,
                    "start": 9,
                    "end": 9
                },
                "flags": 7,
                "start": 32,
                "end": 10
            },
            "flags": 16,
            "start": 0,
            "end": 10
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "start": 10,
                "end": 16
            },
            "name": {
                "kind": 134299649,
                "text": "B",
                "rawText": "B",
                "flags": 96,
                "start": 16,
                "end": 18
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": {
                    "kind": 279,
                    "extendsKeyword": {
                        "kind": 4194391,
                        "flags": 80,
                        "start": 18,
                        "end": 26
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "A",
                        "rawText": "A",
                        "flags": 96,
                        "start": 26,
                        "end": 28
                    },
                    "typeParameter": null,
                    "flags": 16,
                    "start": 26,
                    "end": 28
                },
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
                                    "kind": 134299649,
                                    "text": "constructor",
                                    "rawText": "constructor",
                                    "flags": 97,
                                    "start": 30,
                                    "end": 44
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 2048,
                                    "start": 45,
                                    "end": 46
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
                                                        "kind": 4259935,
                                                        "flags": 97,
                                                        "start": 48,
                                                        "end": 58
                                                    },
                                                    "argumentList": {
                                                        "kind": 256,
                                                        "elements": [],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 59,
                                                        "end": 59
                                                    },
                                                    "flags": 268435488,
                                                    "start": 48,
                                                    "end": 60
                                                },
                                                "flags": 16,
                                                "start": 48,
                                                "end": 61
                                            }
                                        ],
                                        "flags": 33,
                                        "start": 48,
                                        "end": 61
                                    },
                                    "flags": 32,
                                    "start": 46,
                                    "end": 65
                                },
                                "flags": 2048,
                                "start": 44,
                                "end": 65
                            },
                            "flags": 2048,
                            "start": 30,
                            "end": 65
                        }
                    ],
                    "flags": 32,
                    "start": 30,
                    "end": 65
                },
                "flags": 18,
                "start": 32,
                "end": 67
            },
            "flags": 17,
            "start": 10,
            "end": 67
        }
    ],
    "isModule": false,
    "source": "class A {}\nclass B extends A {\n  constructor() {\n    super();\n  }\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 67
}
```

### Printed

```javascript

class A {}
class B  extends A {
  constructor(){
    super ();
  }
}
```

### Diagnostics

```javascript
✔ No errors
```

