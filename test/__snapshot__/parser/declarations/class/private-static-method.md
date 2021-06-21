# Kataw parser test case

## Input

`````js
class A {
  static #method() {}

  run() {
    A.#method = 2;
    ([A.#method] = [2]);
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
                    "elements": [
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "staticKeyword": {
                                "kind": 8388716,
                                "flags": 64,
                                "start": 9,
                                "end": 18
                            },
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "asteriskToken": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "#method",
                                    "rawText": "#method",
                                    "flags": 96,
                                    "start": 18,
                                    "end": 26
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 27,
                                    "end": 28
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 30,
                                        "end": 30
                                    },
                                    "flags": 32,
                                    "start": 28,
                                    "end": 31
                                },
                                "flags": 0,
                                "start": 26,
                                "end": 31
                            },
                            "flags": 0,
                            "start": 18,
                            "end": 31
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
                                    "kind": 134299649,
                                    "text": "run",
                                    "rawText": "run",
                                    "flags": 96,
                                    "start": 31,
                                    "end": 38
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 39,
                                    "end": 40
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
                                                            "text": "A",
                                                            "rawText": "A",
                                                            "flags": 96,
                                                            "start": 42,
                                                            "end": 48
                                                        },
                                                        "expression": {
                                                            "kind": 67191035,
                                                            "text": "#method",
                                                            "rawText": "#method",
                                                            "flags": 96,
                                                            "start": 49,
                                                            "end": 56
                                                        },
                                                        "flags": 536870944,
                                                        "start": 42,
                                                        "end": 56
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4125,
                                                        "flags": 96,
                                                        "start": 56,
                                                        "end": 58
                                                    },
                                                    "right": {
                                                        "kind": 201392130,
                                                        "text": 2,
                                                        "rawText": "2",
                                                        "flags": 96,
                                                        "start": 58,
                                                        "end": 60
                                                    },
                                                    "flags": 32,
                                                    "start": 42,
                                                    "end": 60
                                                },
                                                "flags": 16,
                                                "start": 42,
                                                "end": 61
                                            },
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
                                                                            "text": "A",
                                                                            "rawText": "A",
                                                                            "flags": 96,
                                                                            "start": 68,
                                                                            "end": 69
                                                                        },
                                                                        "expression": {
                                                                            "kind": 67191035,
                                                                            "text": "#method",
                                                                            "rawText": "#method",
                                                                            "flags": 96,
                                                                            "start": 70,
                                                                            "end": 77
                                                                        },
                                                                        "flags": 536870944,
                                                                        "start": 68,
                                                                        "end": 77
                                                                    }
                                                                ],
                                                                "trailingComma": false,
                                                                "flags": 32,
                                                                "start": 68,
                                                                "end": 77
                                                            },
                                                            "flags": 32,
                                                            "start": 67,
                                                            "end": 78
                                                        },
                                                        "operatorToken": {
                                                            "kind": 4125,
                                                            "flags": 96,
                                                            "start": 78,
                                                            "end": 80
                                                        },
                                                        "right": {
                                                            "kind": 119,
                                                            "elementList": {
                                                                "kind": 270,
                                                                "elements": [
                                                                    {
                                                                        "kind": 201392130,
                                                                        "text": 2,
                                                                        "rawText": "2",
                                                                        "flags": 96,
                                                                        "start": 82,
                                                                        "end": 83
                                                                    }
                                                                ],
                                                                "trailingComma": false,
                                                                "flags": 32,
                                                                "start": 82,
                                                                "end": 83
                                                            },
                                                            "flags": 32,
                                                            "start": 80,
                                                            "end": 84
                                                        },
                                                        "flags": 32,
                                                        "start": 67,
                                                        "end": 84
                                                    },
                                                    "flags": 32,
                                                    "start": 61,
                                                    "end": 85
                                                },
                                                "flags": 16,
                                                "start": 61,
                                                "end": 86
                                            }
                                        ],
                                        "flags": 33,
                                        "start": 42,
                                        "end": 86
                                    },
                                    "flags": 32,
                                    "start": 40,
                                    "end": 90
                                },
                                "flags": 0,
                                "start": 38,
                                "end": 90
                            },
                            "flags": 0,
                            "start": 31,
                            "end": 90
                        }
                    ],
                    "flags": 32,
                    "start": 9,
                    "end": 90
                },
                "flags": 7,
                "start": 32,
                "end": 92
            },
            "flags": 16,
            "start": 0,
            "end": 92
        }
    ],
    "isModule": false,
    "source": "class A {\n  static #method() {}\n\n  run() {\n    A.#method = 2;\n    ([A.#method] = [2]);\n  }\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 92
}
```

### Printed

```javascript

 class A {
    static #method() {
    },
    run() {
    A.#method=2;,
    ([A.#method]=[2]);
    }
} 
```

### Diagnostics

```javascript
✔ No errors
```

