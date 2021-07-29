  # Kataw parser test case

## Input

`````js
class Foo {
  static #m = function() {};

  static test() {
    return Foo?.#m();
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
                "transformFlags": 0,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "Foo",
                "rawText": "Foo",
                "flags": 96,
                "transformFlags": 0,
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
                                "transformFlags": 0,
                                "start": 11,
                                "end": 20
                            },
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "#m",
                                "rawText": "#m",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 20,
                                "end": 23
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": {
                                "kind": 177,
                                "asyncKeyword": null,
                                "functionKeyword": {
                                    "kind": 37822554,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 25,
                                    "end": 34
                                },
                                "asteriskToken": null,
                                "name": null,
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 35,
                                    "end": 35
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 38,
                                        "end": 38
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 36,
                                    "end": 39
                                },
                                "returnType": null,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 25,
                                "end": 39
                            },
                            "flags": 32,
                            "transformFlags": 128,
                            "start": 20,
                            "end": 39
                        },
                        {
                            "kind": 1108353041,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 39,
                            "end": 40
                        },
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "staticKeyword": {
                                "kind": 8388716,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 40,
                                "end": 50
                            },
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "asteriskToken": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "test",
                                    "rawText": "test",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 50,
                                    "end": 55
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 56,
                                    "end": 57
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [
                                            {
                                                "kind": 161,
                                                "returnKeyword": {
                                                    "kind": 37757022,
                                                    "flags": 81,
                                                    "transformFlags": 0,
                                                    "start": 59,
                                                    "end": 70
                                                },
                                                "expression": {
                                                    "kind": 205,
                                                    "chainToken": {
                                                        "kind": 393240,
                                                        "flags": 64,
                                                        "transformFlags": 0,
                                                        "start": 74,
                                                        "end": 76
                                                    },
                                                    "member": {
                                                        "kind": 134299649,
                                                        "text": "Foo",
                                                        "rawText": "Foo",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 70,
                                                        "end": 74
                                                    },
                                                    "chain": {
                                                        "kind": 204,
                                                        "chain": {
                                                            "kind": 302,
                                                            "chain": {
                                                                "kind": 202,
                                                                "chain": null,
                                                                "expression": {
                                                                    "kind": 67191035,
                                                                    "text": "#m",
                                                                    "rawText": "#m",
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 76,
                                                                    "end": 78
                                                                },
                                                                "flags": 32,
                                                                "transformFlags": 2,
                                                                "start": 76,
                                                                "end": 78
                                                            },
                                                            "flags": 32,
                                                            "transformFlags": 0,
                                                            "start": 76,
                                                            "end": 78
                                                        },
                                                        "typeArguments": null,
                                                        "argumentList": {
                                                            "kind": 256,
                                                            "elements": [],
                                                            "trailingComma": false,
                                                            "flags": 32,
                                                            "transformFlags": 0,
                                                            "start": 79,
                                                            "end": 79
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 1,
                                                        "start": 78,
                                                        "end": 80
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 70,
                                                    "end": 80
                                                },
                                                "flags": 81,
                                                "transformFlags": 256,
                                                "start": 59,
                                                "end": 81
                                            }
                                        ],
                                        "flags": 33,
                                        "transformFlags": 0,
                                        "start": 59,
                                        "end": 81
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 57,
                                    "end": 85
                                },
                                "flags": 0,
                                "transformFlags": 0,
                                "start": 55,
                                "end": 85
                            },
                            "flags": 0,
                            "transformFlags": 0,
                            "start": 50,
                            "end": 85
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 11,
                    "end": 85
                },
                "flags": 9,
                "transformFlags": 0,
                "start": 32,
                "end": 87
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 87
        }
    ],
    "isModule": false,
    "source": "class Foo {\n  static #m = function() {};\n\n  static test() {\n    return Foo?.#m();\n  }\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 87
}
```

### Printed

```javascript

class Foo {
    static #m = function () {}
    ;
    static test() {
        return Foo?.#m();
    }
}

```

### Diagnostics

```javascript
✔ No errors
```

