# Kataw parser test case

## Input

`````js
class C {
  static set #p(v) { C.#q = v }
  static #q;
  constructor() {
    ([C.#p] = [0]);
  }
}

new C;
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
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "asteriskToken": null,
                            "staticKeyword": {
                                "kind": 8388716,
                                "flags": 64,
                                "start": 9,
                                "end": 18
                            },
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": {
                                "kind": 16499,
                                "flags": 64,
                                "start": 18,
                                "end": 22
                            },
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 67191035,
                                    "text": "#p",
                                    "rawText": "#p",
                                    "flags": 96,
                                    "start": 22,
                                    "end": 25
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [
                                        {
                                            "kind": 134299649,
                                            "text": "v",
                                            "rawText": "v",
                                            "flags": 96,
                                            "start": 26,
                                            "end": 27
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 608,
                                    "start": 26,
                                    "end": 28
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
                                                    "kind": 125,
                                                    "left": {
                                                        "kind": 129,
                                                        "member": {
                                                            "kind": 134299649,
                                                            "text": "C",
                                                            "rawText": "C",
                                                            "flags": 96,
                                                            "start": 30,
                                                            "end": 32
                                                        },
                                                        "expression": {
                                                            "kind": 67191035,
                                                            "text": "#q",
                                                            "rawText": "#q",
                                                            "flags": 96,
                                                            "start": 33,
                                                            "end": 35
                                                        },
                                                        "flags": 536870944,
                                                        "start": 30,
                                                        "end": 35
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4125,
                                                        "flags": 96,
                                                        "start": 35,
                                                        "end": 37
                                                    },
                                                    "right": {
                                                        "kind": 134299649,
                                                        "text": "v",
                                                        "rawText": "v",
                                                        "flags": 96,
                                                        "start": 37,
                                                        "end": 39
                                                    },
                                                    "flags": 32,
                                                    "start": 30,
                                                    "end": 39
                                                },
                                                "flags": 16,
                                                "start": 30,
                                                "end": 39
                                            }
                                        ],
                                        "flags": 32,
                                        "start": 30,
                                        "end": 39
                                    },
                                    "flags": 32,
                                    "start": 28,
                                    "end": 41
                                },
                                "flags": 512,
                                "start": 25,
                                "end": 41
                            },
                            "flags": 512,
                            "start": 18,
                            "end": 41
                        },
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticToken": {
                                "kind": 8388716,
                                "flags": 64,
                                "start": 41,
                                "end": 50
                            },
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "#q",
                                "rawText": "#q",
                                "flags": 96,
                                "start": 50,
                                "end": 53
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 32,
                            "start": 50,
                            "end": 53
                        },
                        {
                            "kind": 317,
                            "flags": 96,
                            "start": 53,
                            "end": 54
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
                                    "start": 54,
                                    "end": 68
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 2048,
                                    "start": 69,
                                    "end": 70
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
                                                    "kind": 121,
                                                    "expression": {
                                                        "kind": 125,
                                                        "left": {
                                                            "kind": 119,
                                                            "elementList": {
                                                                "kind": 270,
                                                                "elements": [
                                                                    {
                                                                        "kind": 129,
                                                                        "member": {
                                                                            "kind": 134299649,
                                                                            "text": "C",
                                                                            "rawText": "C",
                                                                            "flags": 96,
                                                                            "start": 79,
                                                                            "end": 80
                                                                        },
                                                                        "expression": {
                                                                            "kind": 67191035,
                                                                            "text": "#p",
                                                                            "rawText": "#p",
                                                                            "flags": 96,
                                                                            "start": 81,
                                                                            "end": 83
                                                                        },
                                                                        "flags": 536870944,
                                                                        "start": 79,
                                                                        "end": 83
                                                                    }
                                                                ],
                                                                "trailingComma": false,
                                                                "flags": 32,
                                                                "start": 79,
                                                                "end": 83
                                                            },
                                                            "flags": 32,
                                                            "start": 78,
                                                            "end": 84
                                                        },
                                                        "operatorToken": {
                                                            "kind": 4125,
                                                            "flags": 96,
                                                            "start": 84,
                                                            "end": 86
                                                        },
                                                        "right": {
                                                            "kind": 119,
                                                            "elementList": {
                                                                "kind": 270,
                                                                "elements": [
                                                                    {
                                                                        "kind": 201392130,
                                                                        "text": 0,
                                                                        "rawText": "0",
                                                                        "flags": 96,
                                                                        "start": 88,
                                                                        "end": 89
                                                                    }
                                                                ],
                                                                "trailingComma": false,
                                                                "flags": 32,
                                                                "start": 88,
                                                                "end": 89
                                                            },
                                                            "flags": 32,
                                                            "start": 86,
                                                            "end": 90
                                                        },
                                                        "flags": 32,
                                                        "start": 78,
                                                        "end": 90
                                                    },
                                                    "flags": 32,
                                                    "start": 72,
                                                    "end": 91
                                                },
                                                "flags": 16,
                                                "start": 72,
                                                "end": 92
                                            }
                                        ],
                                        "flags": 33,
                                        "start": 72,
                                        "end": 92
                                    },
                                    "flags": 32,
                                    "start": 70,
                                    "end": 96
                                },
                                "flags": 2048,
                                "start": 68,
                                "end": 96
                            },
                            "flags": 2048,
                            "start": 54,
                            "end": 96
                        }
                    ],
                    "flags": 32,
                    "start": 9,
                    "end": 96
                },
                "flags": 7,
                "start": 32,
                "end": 98
            },
            "flags": 16,
            "start": 0,
            "end": 98
        },
        {
            "kind": 120,
            "expression": {
                "kind": 210,
                "newKeyword": {
                    "kind": 138477661,
                    "flags": 97,
                    "start": 98,
                    "end": 103
                },
                "expression": {
                    "kind": 134299649,
                    "text": "C",
                    "rawText": "C",
                    "flags": 96,
                    "start": 103,
                    "end": 105
                },
                "argumentList": null,
                "flags": 97,
                "start": 98,
                "end": 105
            },
            "flags": 16,
            "start": 98,
            "end": 106
        }
    ],
    "isModule": false,
    "source": "class C {\n  static set #p(v) { C.#q = v }\n  static #q;\n  constructor() {\n    ([C.#p] = [0]);\n  }\n}\n\nnew C;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 106
}
```

### Printed

```javascript

class C {
  static set static #p() {
    C.#q = v;
  }
  static #q;

  constructor() {
    ([C.#p] = [0]);
  }
}
new  C();
```

### Diagnostics

```javascript
✔ No errors
```

