# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, next: true }
`````

## Input

`````js
class Foo {
  static #bar = 21;
  static #_ = (() => {
    this.foo = this.#bar;
    this.qux1 = this.qux;
  })();
  static qux = 21;
  static #_2 = (() => {
    this.qux2 = this.qux;
  })();
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
                "text": "Foo",
                "rawText": "Foo",
                "flags": 96,
                "start": 5,
                "end": 9
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
                            "staticKeyword": {
                                "kind": 8388716,
                                "flags": 64,
                                "start": 11,
                                "end": 20
                            },
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "#bar",
                                "rawText": "#bar",
                                "flags": 96,
                                "start": 20,
                                "end": 25
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": {
                                "kind": 201392130,
                                "text": 21,
                                "rawText": "21",
                                "flags": 96,
                                "start": 27,
                                "end": 30
                            },
                            "flags": 32,
                            "start": 20,
                            "end": 30
                        },
                        {
                            "kind": 1108353041,
                            "flags": 64,
                            "start": 30,
                            "end": 31
                        },
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticKeyword": {
                                "kind": 8388716,
                                "flags": 64,
                                "start": 31,
                                "end": 40
                            },
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "#_",
                                "rawText": "#_",
                                "flags": 96,
                                "start": 40,
                                "end": 43
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": {
                                "kind": 131,
                                "expression": {
                                    "kind": 121,
                                    "expression": {
                                        "kind": 271,
                                        "asyncKeyword": null,
                                        "typeParameters": null,
                                        "arrowPatameterList": {
                                            "kind": 342,
                                            "parameters": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "start": 48,
                                            "end": 48
                                        },
                                        "returnType": null,
                                        "arrowToken": {
                                            "kind": 10,
                                            "flags": 64,
                                            "start": 49,
                                            "end": 52
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
                                                            "kind": 125,
                                                            "left": {
                                                                "kind": 129,
                                                                "member": {
                                                                    "kind": 4276321,
                                                                    "flags": 97,
                                                                    "start": 54,
                                                                    "end": 63
                                                                },
                                                                "expression": {
                                                                    "kind": 134299649,
                                                                    "text": "foo",
                                                                    "rawText": "foo",
                                                                    "flags": 96,
                                                                    "start": 64,
                                                                    "end": 67
                                                                },
                                                                "flags": 97,
                                                                "start": 54,
                                                                "end": 67
                                                            },
                                                            "operatorToken": {
                                                                "kind": 4125,
                                                                "flags": 96,
                                                                "start": 67,
                                                                "end": 69
                                                            },
                                                            "right": {
                                                                "kind": 129,
                                                                "member": {
                                                                    "kind": 4276321,
                                                                    "flags": 96,
                                                                    "start": 69,
                                                                    "end": 74
                                                                },
                                                                "expression": {
                                                                    "kind": 67191035,
                                                                    "text": "#bar",
                                                                    "rawText": "#bar",
                                                                    "flags": 96,
                                                                    "start": 75,
                                                                    "end": 79
                                                                },
                                                                "flags": 96,
                                                                "start": 69,
                                                                "end": 79
                                                            },
                                                            "flags": 32,
                                                            "start": 54,
                                                            "end": 79
                                                        },
                                                        "flags": 16,
                                                        "start": 54,
                                                        "end": 80
                                                    },
                                                    {
                                                        "kind": 120,
                                                        "expression": {
                                                            "kind": 125,
                                                            "left": {
                                                                "kind": 129,
                                                                "member": {
                                                                    "kind": 4276321,
                                                                    "flags": 97,
                                                                    "start": 80,
                                                                    "end": 89
                                                                },
                                                                "expression": {
                                                                    "kind": 134299649,
                                                                    "text": "qux1",
                                                                    "rawText": "qux1",
                                                                    "flags": 96,
                                                                    "start": 90,
                                                                    "end": 94
                                                                },
                                                                "flags": 97,
                                                                "start": 80,
                                                                "end": 94
                                                            },
                                                            "operatorToken": {
                                                                "kind": 4125,
                                                                "flags": 96,
                                                                "start": 94,
                                                                "end": 96
                                                            },
                                                            "right": {
                                                                "kind": 129,
                                                                "member": {
                                                                    "kind": 4276321,
                                                                    "flags": 96,
                                                                    "start": 96,
                                                                    "end": 101
                                                                },
                                                                "expression": {
                                                                    "kind": 134299649,
                                                                    "text": "qux",
                                                                    "rawText": "qux",
                                                                    "flags": 96,
                                                                    "start": 102,
                                                                    "end": 105
                                                                },
                                                                "flags": 96,
                                                                "start": 96,
                                                                "end": 105
                                                            },
                                                            "flags": 32,
                                                            "start": 80,
                                                            "end": 105
                                                        },
                                                        "flags": 16,
                                                        "start": 80,
                                                        "end": 106
                                                    }
                                                ],
                                                "flags": 33,
                                                "start": 54,
                                                "end": 106
                                            },
                                            "flags": 32,
                                            "start": 52,
                                            "end": 110
                                        },
                                        "flags": 32,
                                        "start": 47,
                                        "end": 110
                                    },
                                    "flags": 32,
                                    "start": 45,
                                    "end": 111
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 112,
                                    "end": 112
                                },
                                "flags": 268435488,
                                "start": 45,
                                "end": 113
                            },
                            "flags": 32,
                            "start": 40,
                            "end": 113
                        },
                        {
                            "kind": 1108353041,
                            "flags": 64,
                            "start": 113,
                            "end": 114
                        },
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticKeyword": {
                                "kind": 8388716,
                                "flags": 64,
                                "start": 114,
                                "end": 123
                            },
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "qux",
                                "rawText": "qux",
                                "flags": 96,
                                "start": 123,
                                "end": 127
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": {
                                "kind": 201392130,
                                "text": 21,
                                "rawText": "21",
                                "flags": 96,
                                "start": 129,
                                "end": 132
                            },
                            "flags": 32,
                            "start": 123,
                            "end": 132
                        },
                        {
                            "kind": 1108353041,
                            "flags": 64,
                            "start": 132,
                            "end": 133
                        },
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticKeyword": {
                                "kind": 8388716,
                                "flags": 64,
                                "start": 133,
                                "end": 142
                            },
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "#_2",
                                "rawText": "#_2",
                                "flags": 96,
                                "start": 142,
                                "end": 146
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": {
                                "kind": 131,
                                "expression": {
                                    "kind": 121,
                                    "expression": {
                                        "kind": 271,
                                        "asyncKeyword": null,
                                        "typeParameters": null,
                                        "arrowPatameterList": {
                                            "kind": 342,
                                            "parameters": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "start": 151,
                                            "end": 151
                                        },
                                        "returnType": null,
                                        "arrowToken": {
                                            "kind": 10,
                                            "flags": 64,
                                            "start": 152,
                                            "end": 155
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
                                                            "kind": 125,
                                                            "left": {
                                                                "kind": 129,
                                                                "member": {
                                                                    "kind": 4276321,
                                                                    "flags": 97,
                                                                    "start": 157,
                                                                    "end": 166
                                                                },
                                                                "expression": {
                                                                    "kind": 134299649,
                                                                    "text": "qux2",
                                                                    "rawText": "qux2",
                                                                    "flags": 96,
                                                                    "start": 167,
                                                                    "end": 171
                                                                },
                                                                "flags": 97,
                                                                "start": 157,
                                                                "end": 171
                                                            },
                                                            "operatorToken": {
                                                                "kind": 4125,
                                                                "flags": 96,
                                                                "start": 171,
                                                                "end": 173
                                                            },
                                                            "right": {
                                                                "kind": 129,
                                                                "member": {
                                                                    "kind": 4276321,
                                                                    "flags": 96,
                                                                    "start": 173,
                                                                    "end": 178
                                                                },
                                                                "expression": {
                                                                    "kind": 134299649,
                                                                    "text": "qux",
                                                                    "rawText": "qux",
                                                                    "flags": 96,
                                                                    "start": 179,
                                                                    "end": 182
                                                                },
                                                                "flags": 96,
                                                                "start": 173,
                                                                "end": 182
                                                            },
                                                            "flags": 32,
                                                            "start": 157,
                                                            "end": 182
                                                        },
                                                        "flags": 16,
                                                        "start": 157,
                                                        "end": 183
                                                    }
                                                ],
                                                "flags": 33,
                                                "start": 157,
                                                "end": 183
                                            },
                                            "flags": 32,
                                            "start": 155,
                                            "end": 187
                                        },
                                        "flags": 32,
                                        "start": 150,
                                        "end": 187
                                    },
                                    "flags": 32,
                                    "start": 148,
                                    "end": 188
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 189,
                                    "end": 189
                                },
                                "flags": 268435488,
                                "start": 148,
                                "end": 190
                            },
                            "flags": 32,
                            "start": 142,
                            "end": 190
                        },
                        {
                            "kind": 1108353041,
                            "flags": 64,
                            "start": 190,
                            "end": 191
                        }
                    ],
                    "flags": 32,
                    "start": 11,
                    "end": 191
                },
                "flags": 9,
                "start": 32,
                "end": 193
            },
            "flags": 16,
            "start": 0,
            "end": 193
        }
    ],
    "isModule": false,
    "source": "class Foo {\n  static #bar = 21;\n  static #_ = (() => {\n    this.foo = this.#bar;\n    this.qux1 = this.qux;\n  })();\n  static qux = 21;\n  static #_2 = (() => {\n    this.qux2 = this.qux;\n  })();\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 193
}
```

### Printed

```javascript

class Foo {
  static #bar = 21
  ;
  static #_ = (() => {
    this.foo = this.#bar;
    this.qux1 = this.qux;
  })()
  ;
  static qux = 21
  ;
  static #_2 = (() => {
    this.qux2 = this.qux;
  })()
  ;
}

```

### Diagnostics

```javascript
✔ No errors
```

