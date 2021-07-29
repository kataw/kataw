# Kataw parser test case

## Input

`````js
class Foo {
  #x = 1;
  test() {
    class X extends (#x in {}) {};
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
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "#x",
                                "rawText": "#x",
                                "flags": 97,
                                "transformFlags": 0,
                                "start": 11,
                                "end": 16
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 18,
                                "end": 20
                            },
                            "flags": 32,
                            "transformFlags": 128,
                            "start": 11,
                            "end": 20
                        },
                        {
                            "kind": 1108353041,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 20,
                            "end": 21
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
                                    "text": "test",
                                    "rawText": "test",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 21,
                                    "end": 28
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 29,
                                    "end": 30
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
                                                    "transformFlags": 0,
                                                    "start": 32,
                                                    "end": 42
                                                },
                                                "name": {
                                                    "kind": 134299649,
                                                    "text": "X",
                                                    "rawText": "X",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 42,
                                                    "end": 44
                                                },
                                                "typeParameters": null,
                                                "tail": {
                                                    "kind": 277,
                                                    "classHeritage": {
                                                        "kind": 279,
                                                        "extendsKeyword": {
                                                            "kind": 4194391,
                                                            "flags": 80,
                                                            "transformFlags": 0,
                                                            "start": 44,
                                                            "end": 52
                                                        },
                                                        "expression": {
                                                            "kind": 121,
                                                            "expression": {
                                                                "kind": 198,
                                                                "left": {
                                                                    "kind": 67191035,
                                                                    "text": "#x",
                                                                    "rawText": "#x",
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 54,
                                                                    "end": 56
                                                                },
                                                                "operatorToken": {
                                                                    "kind": 21006388,
                                                                    "flags": 96,
                                                                    "transformFlags": 8192,
                                                                    "start": 56,
                                                                    "end": 59
                                                                },
                                                                "right": {
                                                                    "kind": 220,
                                                                    "propertyList": {
                                                                        "kind": 218,
                                                                        "properties": [],
                                                                        "trailingComma": false,
                                                                        "flags": 16,
                                                                        "transformFlags": 0,
                                                                        "start": 61,
                                                                        "end": 61
                                                                    },
                                                                    "flags": 48,
                                                                    "transformFlags": 8,
                                                                    "start": 59,
                                                                    "end": 62
                                                                },
                                                                "flags": 96,
                                                                "transformFlags": 5120,
                                                                "start": 52,
                                                                "end": 62
                                                            },
                                                            "flags": 32,
                                                            "transformFlags": 0,
                                                            "start": 52,
                                                            "end": 63
                                                        },
                                                        "typeParameter": null,
                                                        "flags": 16,
                                                        "transformFlags": 0,
                                                        "start": 52,
                                                        "end": 63
                                                    },
                                                    "body": {
                                                        "kind": 303,
                                                        "elements": [],
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 65,
                                                        "end": 65
                                                    },
                                                    "flags": 44,
                                                    "transformFlags": 0,
                                                    "start": 32,
                                                    "end": 66
                                                },
                                                "flags": 17,
                                                "transformFlags": 0,
                                                "start": 32,
                                                "end": 66
                                            },
                                            {
                                                "kind": 168,
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 66,
                                                "end": 67
                                            }
                                        ],
                                        "flags": 33,
                                        "transformFlags": 0,
                                        "start": 32,
                                        "end": 67
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 30,
                                    "end": 71
                                },
                                "flags": 0,
                                "transformFlags": 0,
                                "start": 28,
                                "end": 71
                            },
                            "flags": 0,
                            "transformFlags": 0,
                            "start": 21,
                            "end": 71
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 11,
                    "end": 71
                },
                "flags": 9,
                "transformFlags": 0,
                "start": 32,
                "end": 73
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 73
        }
    ],
    "isModule": false,
    "source": "class Foo {\n  #x = 1;\n  test() {\n    class X extends (#x in {}) {};\n  }\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 73
}
```

### Printed

```javascript

class Foo {
    #x = 1
    ;
    test() {
        class X extends (#x in {}) {
        }
    }
}

```

### Diagnostics

```javascript
✔ No errors
```

