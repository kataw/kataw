  # Kataw parser test case

## Input

`````js
class Foo {
  static #x = 1;

  static test() {
    return Foo?.#x.toFixed(2);
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
                                "text": "#x",
                                "rawText": "#x",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 20,
                                "end": 23
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 25,
                                "end": 27
                            },
                            "flags": 32,
                            "transformFlags": 128,
                            "start": 20,
                            "end": 27
                        },
                        {
                            "kind": 1108353041,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 27,
                            "end": 28
                        },
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "staticKeyword": {
                                "kind": 8388716,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 28,
                                "end": 38
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
                                    "start": 38,
                                    "end": 43
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 44,
                                    "end": 45
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
                                                    "start": 47,
                                                    "end": 58
                                                },
                                                "expression": {
                                                    "kind": 131,
                                                    "expression": {
                                                        "kind": 205,
                                                        "chainToken": {
                                                            "kind": 393240,
                                                            "flags": 64,
                                                            "transformFlags": 0,
                                                            "start": 62,
                                                            "end": 64
                                                        },
                                                        "member": {
                                                            "kind": 134299649,
                                                            "text": "Foo",
                                                            "rawText": "Foo",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 58,
                                                            "end": 62
                                                        },
                                                        "chain": {
                                                            "kind": 202,
                                                            "chain": {
                                                                "kind": 302,
                                                                "chain": {
                                                                    "kind": 202,
                                                                    "chain": null,
                                                                    "expression": {
                                                                        "kind": 67191035,
                                                                        "text": "#x",
                                                                        "rawText": "#x",
                                                                        "flags": 96,
                                                                        "transformFlags": 0,
                                                                        "start": 64,
                                                                        "end": 66
                                                                    },
                                                                    "flags": 32,
                                                                    "transformFlags": 2,
                                                                    "start": 64,
                                                                    "end": 66
                                                                },
                                                                "flags": 32,
                                                                "transformFlags": 0,
                                                                "start": 64,
                                                                "end": 66
                                                            },
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "toFixed",
                                                                "rawText": "toFixed",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 67,
                                                                "end": 74
                                                            },
                                                            "flags": 32,
                                                            "transformFlags": 2,
                                                            "start": 66,
                                                            "end": 74
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 58,
                                                        "end": 74
                                                    },
                                                    "argumentList": {
                                                        "kind": 256,
                                                        "elements": [
                                                            {
                                                                "kind": 201392130,
                                                                "text": 2,
                                                                "rawText": "2",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 75,
                                                                "end": 76
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 75,
                                                        "end": 76
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 1,
                                                    "start": 58,
                                                    "end": 77
                                                },
                                                "flags": 81,
                                                "transformFlags": 256,
                                                "start": 47,
                                                "end": 78
                                            }
                                        ],
                                        "flags": 33,
                                        "transformFlags": 0,
                                        "start": 47,
                                        "end": 78
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 45,
                                    "end": 82
                                },
                                "flags": 0,
                                "transformFlags": 0,
                                "start": 43,
                                "end": 82
                            },
                            "flags": 0,
                            "transformFlags": 0,
                            "start": 38,
                            "end": 82
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 11,
                    "end": 82
                },
                "flags": 9,
                "transformFlags": 0,
                "start": 32,
                "end": 84
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 84
        }
    ],
    "isModule": false,
    "source": "class Foo {\n  static #x = 1;\n\n  static test() {\n    return Foo?.#x.toFixed(2);\n  }\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 84
}
```

### Printed

```javascript

class Foo {
    static #x = 1
    ;
    static test() {
        return Foo?.#xtoFixed(2);
    }
}

```

### Diagnostics

```javascript
✔ No errors
```

