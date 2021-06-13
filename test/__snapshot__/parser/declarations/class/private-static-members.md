# Kataw parser test case

## Input

`````js
class Foo {
	static #x
	static get #y() {}
	static set #y(x) {}
	static #z() {}
	foo() {
    Foo.#x += 1
  	Foo.#y += 1
	  Foo.#z()
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
                            "staticToken": {
                                "kind": 8388716,
                                "flags": 64,
                                "start": 11,
                                "end": 19
                            },
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "#x",
                                "rawText": "#x",
                                "flags": 96,
                                "start": 19,
                                "end": 22
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 32,
                            "start": 19,
                            "end": 22
                        },
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "generatorToken": null,
                            "staticKeyword": {
                                "kind": 8388716,
                                "flags": 64,
                                "start": 22,
                                "end": 30
                            },
                            "asyncKeyword": null,
                            "setKeyword": {
                                "kind": 16498,
                                "flags": 64,
                                "start": 30,
                                "end": 34
                            },
                            "getKeyword": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 67191035,
                                    "text": "#y",
                                    "flags": 96,
                                    "start": 34,
                                    "end": 37
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 1024,
                                    "start": 38,
                                    "end": 39
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 41,
                                        "end": 41
                                    },
                                    "flags": 32,
                                    "start": 39,
                                    "end": 42
                                },
                                "flags": 1024,
                                "start": 37,
                                "end": 42
                            },
                            "flags": 1024,
                            "start": 30,
                            "end": 42
                        },
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "generatorToken": null,
                            "staticKeyword": {
                                "kind": 8388716,
                                "flags": 64,
                                "start": 42,
                                "end": 50
                            },
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": {
                                "kind": 16499,
                                "flags": 64,
                                "start": 50,
                                "end": 54
                            },
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 67191035,
                                    "text": "#y",
                                    "flags": 96,
                                    "start": 54,
                                    "end": 57
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [
                                        {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 58,
                                            "end": 59
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 608,
                                    "start": 58,
                                    "end": 60
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 62,
                                        "end": 62
                                    },
                                    "flags": 32,
                                    "start": 60,
                                    "end": 63
                                },
                                "flags": 512,
                                "start": 57,
                                "end": 63
                            },
                            "flags": 512,
                            "start": 50,
                            "end": 63
                        },
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "generatorToken": null,
                            "staticKeyword": {
                                "kind": 8388716,
                                "flags": 64,
                                "start": 63,
                                "end": 71
                            },
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "#z",
                                    "rawText": "#z",
                                    "flags": 96,
                                    "start": 71,
                                    "end": 74
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 75,
                                    "end": 76
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 78,
                                        "end": 78
                                    },
                                    "flags": 32,
                                    "start": 76,
                                    "end": 79
                                },
                                "flags": 0,
                                "start": 74,
                                "end": 79
                            },
                            "flags": 0,
                            "start": 71,
                            "end": 79
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
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "start": 79,
                                    "end": 84
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 85,
                                    "end": 86
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
                                                            "text": "Foo",
                                                            "rawText": "Foo",
                                                            "flags": 96,
                                                            "start": 88,
                                                            "end": 96
                                                        },
                                                        "expression": {
                                                            "kind": 67191035,
                                                            "text": "#x",
                                                            "flags": 96,
                                                            "start": 97,
                                                            "end": 99
                                                        },
                                                        "flags": 536870944,
                                                        "start": 88,
                                                        "end": 99
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4130,
                                                        "flags": 96,
                                                        "start": 99,
                                                        "end": 102
                                                    },
                                                    "right": {
                                                        "kind": 201392130,
                                                        "text": 1,
                                                        "rawText": "1",
                                                        "flags": 96,
                                                        "start": 102,
                                                        "end": 104
                                                    },
                                                    "flags": 32,
                                                    "start": 88,
                                                    "end": 104
                                                },
                                                "flags": 16,
                                                "start": 88,
                                                "end": 104
                                            },
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 125,
                                                    "left": {
                                                        "kind": 129,
                                                        "member": {
                                                            "kind": 134299649,
                                                            "text": "Foo",
                                                            "rawText": "Foo",
                                                            "flags": 96,
                                                            "start": 104,
                                                            "end": 111
                                                        },
                                                        "expression": {
                                                            "kind": 67191035,
                                                            "text": "#y",
                                                            "flags": 96,
                                                            "start": 112,
                                                            "end": 114
                                                        },
                                                        "flags": 536870944,
                                                        "start": 104,
                                                        "end": 114
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4130,
                                                        "flags": 96,
                                                        "start": 114,
                                                        "end": 117
                                                    },
                                                    "right": {
                                                        "kind": 201392130,
                                                        "text": 1,
                                                        "rawText": "1",
                                                        "flags": 96,
                                                        "start": 117,
                                                        "end": 119
                                                    },
                                                    "flags": 32,
                                                    "start": 104,
                                                    "end": 119
                                                },
                                                "flags": 16,
                                                "start": 104,
                                                "end": 119
                                            },
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 131,
                                                    "expression": {
                                                        "kind": 129,
                                                        "member": {
                                                            "kind": 134299649,
                                                            "text": "Foo",
                                                            "rawText": "Foo",
                                                            "flags": 96,
                                                            "start": 119,
                                                            "end": 126
                                                        },
                                                        "expression": {
                                                            "kind": 67191035,
                                                            "text": "#z",
                                                            "flags": 96,
                                                            "start": 127,
                                                            "end": 129
                                                        },
                                                        "flags": 536870944,
                                                        "start": 119,
                                                        "end": 129
                                                    },
                                                    "argumentList": {
                                                        "kind": 256,
                                                        "elements": [],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 130,
                                                        "end": 130
                                                    },
                                                    "flags": 268435488,
                                                    "start": 119,
                                                    "end": 131
                                                },
                                                "flags": 16,
                                                "start": 119,
                                                "end": 131
                                            }
                                        ],
                                        "flags": 33,
                                        "start": 88,
                                        "end": 131
                                    },
                                    "flags": 32,
                                    "start": 86,
                                    "end": 135
                                },
                                "flags": 0,
                                "start": 84,
                                "end": 135
                            },
                            "flags": 0,
                            "start": 79,
                            "end": 135
                        }
                    ],
                    "flags": 32,
                    "start": 11,
                    "end": 135
                },
                "flags": 9,
                "start": 32,
                "end": 137
            },
            "flags": 16,
            "start": 0,
            "end": 137
        }
    ],
    "isModule": false,
    "source": "class Foo {\n\tstatic #x\n\tstatic get #y() {}\n\tstatic set #y(x) {}\n\tstatic #z() {}\n\tfoo() {\n    Foo.#x += 1\n  \tFoo.#y += 1\n\t  Foo.#z()\n  }\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 137
}
```

### Printed

```javascript

class Foo {
  static #x;
  static get static #y() {}
  static set static #y(x) {}
  static static #z() {}
  foo() {
    Foo.#x += 1;
    Foo.#y += 1;
    Foo.#z();
  }
}
```

### Diagnostics

```javascript
✔ No errors
```

