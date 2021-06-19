# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, next: true }
`````

## Input

`````js
class C {
  static #_;
  constructor() {
    class D {
      static {
        C.#_ = 42;
      }
    }
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
                "text": "C",
                "rawText": "C",
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
                    "elements": [
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticToken": {
                                "kind": 8388716,
                                "flags": 64,
                                "start": 9,
                                "end": 18
                            },
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "#_",
                                "rawText": "#_",
                                "flags": 96,
                                "start": 18,
                                "end": 21
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 32,
                            "start": 18,
                            "end": 21
                        },
                        {
                            "kind": 317,
                            "flags": 96,
                            "start": 21,
                            "end": 22
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
                                    "kind": 134299649,
                                    "text": "constructor",
                                    "rawText": "constructor",
                                    "flags": 96,
                                    "start": 22,
                                    "end": 36
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 2048,
                                    "start": 37,
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
                                                "kind": 178,
                                                "declareKeyword": null,
                                                "decorators": null,
                                                "classKeyword": {
                                                    "kind": 37822544,
                                                    "flags": 81,
                                                    "start": 40,
                                                    "end": 50
                                                },
                                                "name": {
                                                    "kind": 134299649,
                                                    "text": "D",
                                                    "rawText": "D",
                                                    "flags": 96,
                                                    "start": 50,
                                                    "end": 52
                                                },
                                                "typeParameters": null,
                                                "tail": {
                                                    "kind": 277,
                                                    "classHeritage": null,
                                                    "body": {
                                                        "kind": 303,
                                                        "elements": [
                                                            {
                                                                "kind": 305,
                                                                "decorators": null,
                                                                "declaredKeyword": null,
                                                                "staticKeyword": null,
                                                                "block": {
                                                                    "kind": 124,
                                                                    "block": {
                                                                        "kind": 249,
                                                                        "statements": [
                                                                            {
                                                                                "kind": 120,
                                                                                "expression": {
                                                                                    "kind": 125,
                                                                                    "left": {
                                                                                        "kind": 129,
                                                                                        "member": {
                                                                                            "kind": 134299649,
                                                                                            "text": "C",
                                                                                            "rawText": "C",
                                                                                            "flags": 96,
                                                                                            "start": 69,
                                                                                            "end": 79
                                                                                        },
                                                                                        "expression": {
                                                                                            "kind": 67191035,
                                                                                            "text": "#_",
                                                                                            "rawText": "#_",
                                                                                            "flags": 96,
                                                                                            "start": 80,
                                                                                            "end": 82
                                                                                        },
                                                                                        "flags": 536870944,
                                                                                        "start": 69,
                                                                                        "end": 82
                                                                                    },
                                                                                    "operatorToken": {
                                                                                        "kind": 4125,
                                                                                        "flags": 96,
                                                                                        "start": 82,
                                                                                        "end": 84
                                                                                    },
                                                                                    "right": {
                                                                                        "kind": 201392130,
                                                                                        "text": 42,
                                                                                        "rawText": "42",
                                                                                        "flags": 96,
                                                                                        "start": 84,
                                                                                        "end": 87
                                                                                    },
                                                                                    "flags": 32,
                                                                                    "start": 69,
                                                                                    "end": 87
                                                                                },
                                                                                "flags": 16,
                                                                                "start": 69,
                                                                                "end": 88
                                                                            }
                                                                        ],
                                                                        "flags": 17,
                                                                        "start": 69,
                                                                        "end": 88
                                                                    },
                                                                    "flags": 54,
                                                                    "start": 0,
                                                                    "end": 96
                                                                },
                                                                "flags": 32,
                                                                "start": 54,
                                                                "end": 96
                                                            }
                                                        ],
                                                        "flags": 32,
                                                        "start": 54,
                                                        "end": 96
                                                    },
                                                    "flags": 52,
                                                    "start": 32,
                                                    "end": 102
                                                },
                                                "flags": 17,
                                                "start": 40,
                                                "end": 102
                                            }
                                        ],
                                        "flags": 33,
                                        "start": 40,
                                        "end": 102
                                    },
                                    "flags": 32,
                                    "start": 38,
                                    "end": 106
                                },
                                "flags": 2048,
                                "start": 36,
                                "end": 106
                            },
                            "flags": 2048,
                            "start": 22,
                            "end": 106
                        }
                    ],
                    "flags": 32,
                    "start": 9,
                    "end": 106
                },
                "flags": 7,
                "start": 32,
                "end": 108
            },
            "flags": 16,
            "start": 0,
            "end": 108
        }
    ],
    "isModule": false,
    "source": "class C {\n  static #_;\n  constructor() {\n    class D {\n      static {\n        C.#_ = 42;\n      }\n    }\n  }\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 108
}
```

### Printed

```javascript

class C {
  static #_;

  constructor {
    class D {

    }
  }
}
```

### Diagnostics

```javascript
✔ No errors
```

