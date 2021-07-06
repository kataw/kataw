# Kataw parser test case

## Input

`````js

class Yo {
  @foo("hello")
  async plop() {}

  @anotherDecoratorWithALongName("and a very long string as a first argument")
  async plip() {}

  @anotherDecoratorWithALongName("another very long string, but now inline") async plip() {}
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
                "flags": 81,
                "transformFlags": 0,
                "start": 0,
                "end": 6
            },
            "name": {
                "kind": 134299649,
                "text": "Yo",
                "rawText": "Yo",
                "flags": 96,
                "transformFlags": 0,
                "start": 6,
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
                            "kind": 278,
                            "declareToken": null,
                            "decorators": {
                                "kind": 207,
                                "elements": [
                                    {
                                        "kind": 34611453,
                                        "decoratorToken": {
                                            "kind": 34611453,
                                            "flags": 65,
                                            "transformFlags": 0,
                                            "start": 11,
                                            "end": 15
                                        },
                                        "expression": {
                                            "kind": 131,
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "foo",
                                                "rawText": "foo",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 15,
                                                "end": 18
                                            },
                                            "argumentList": {
                                                "kind": 256,
                                                "elements": [
                                                    {
                                                        "kind": 201392131,
                                                        "text": "hello",
                                                        "rawText": "\"hello\"",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 19,
                                                        "end": 26
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 19,
                                                "end": 26
                                            },
                                            "flags": 268435488,
                                            "transformFlags": 1,
                                            "start": 15,
                                            "end": 27
                                        },
                                        "flags": 0,
                                        "transformFlags": 0,
                                        "start": 15,
                                        "end": 27
                                    }
                                ],
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 11,
                                "end": 27
                            },
                            "staticKeyword": null,
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 65,
                                "transformFlags": 0,
                                "start": 11,
                                "end": 35
                            },
                            "setKeyword": null,
                            "getKeyword": null,
                            "asteriskToken": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "plop",
                                    "rawText": "plop",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 35,
                                    "end": 40
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "transformFlags": 0,
                                    "start": 41,
                                    "end": 42
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 44,
                                        "end": 44
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 42,
                                    "end": 45
                                },
                                "flags": 256,
                                "transformFlags": 0,
                                "start": 40,
                                "end": 45
                            },
                            "flags": 256,
                            "transformFlags": 0,
                            "start": 11,
                            "end": 45
                        },
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": {
                                "kind": 207,
                                "elements": [
                                    {
                                        "kind": 34611453,
                                        "decoratorToken": {
                                            "kind": 34611453,
                                            "flags": 65,
                                            "transformFlags": 0,
                                            "start": 45,
                                            "end": 50
                                        },
                                        "expression": {
                                            "kind": 131,
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "anotherDecoratorWithALongName",
                                                "rawText": "anotherDecoratorWithALongName",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 50,
                                                "end": 79
                                            },
                                            "argumentList": {
                                                "kind": 256,
                                                "elements": [
                                                    {
                                                        "kind": 201392131,
                                                        "text": "and a very long string as a first argument",
                                                        "rawText": "\"and a very long string as a first argument\"",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 80,
                                                        "end": 124
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 80,
                                                "end": 124
                                            },
                                            "flags": 268435488,
                                            "transformFlags": 1,
                                            "start": 50,
                                            "end": 125
                                        },
                                        "flags": 0,
                                        "transformFlags": 0,
                                        "start": 50,
                                        "end": 125
                                    }
                                ],
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 45,
                                "end": 125
                            },
                            "staticKeyword": null,
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 65,
                                "transformFlags": 0,
                                "start": 45,
                                "end": 133
                            },
                            "setKeyword": null,
                            "getKeyword": null,
                            "asteriskToken": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "plip",
                                    "rawText": "plip",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 133,
                                    "end": 138
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "transformFlags": 0,
                                    "start": 139,
                                    "end": 140
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 142,
                                        "end": 142
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 140,
                                    "end": 143
                                },
                                "flags": 256,
                                "transformFlags": 0,
                                "start": 138,
                                "end": 143
                            },
                            "flags": 256,
                            "transformFlags": 0,
                            "start": 45,
                            "end": 143
                        },
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": {
                                "kind": 207,
                                "elements": [
                                    {
                                        "kind": 34611453,
                                        "decoratorToken": {
                                            "kind": 34611453,
                                            "flags": 65,
                                            "transformFlags": 0,
                                            "start": 143,
                                            "end": 148
                                        },
                                        "expression": {
                                            "kind": 131,
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "anotherDecoratorWithALongName",
                                                "rawText": "anotherDecoratorWithALongName",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 148,
                                                "end": 177
                                            },
                                            "argumentList": {
                                                "kind": 256,
                                                "elements": [
                                                    {
                                                        "kind": 201392131,
                                                        "text": "another very long string, but now inline",
                                                        "rawText": "\"another very long string, but now inline\"",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 178,
                                                        "end": 220
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 178,
                                                "end": 220
                                            },
                                            "flags": 268435488,
                                            "transformFlags": 1,
                                            "start": 148,
                                            "end": 221
                                        },
                                        "flags": 0,
                                        "transformFlags": 0,
                                        "start": 148,
                                        "end": 221
                                    }
                                ],
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 143,
                                "end": 221
                            },
                            "staticKeyword": null,
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 143,
                                "end": 227
                            },
                            "setKeyword": null,
                            "getKeyword": null,
                            "asteriskToken": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "plip",
                                    "rawText": "plip",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 227,
                                    "end": 232
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "transformFlags": 0,
                                    "start": 233,
                                    "end": 234
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 236,
                                        "end": 236
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 234,
                                    "end": 237
                                },
                                "flags": 256,
                                "transformFlags": 0,
                                "start": 232,
                                "end": 237
                            },
                            "flags": 256,
                            "transformFlags": 0,
                            "start": 143,
                            "end": 237
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 11,
                    "end": 237
                },
                "flags": 9,
                "transformFlags": 0,
                "start": 32,
                "end": 239
            },
            "flags": 17,
            "transformFlags": 0,
            "start": 0,
            "end": 239
        }
    ],
    "isModule": false,
    "source": "\nclass Yo {\n  @foo(\"hello\")\n  async plop() {}\n\n  @anotherDecoratorWithALongName(\"and a very long string as a first argument\")\n  async plip() {}\n\n  @anotherDecoratorWithALongName(\"another very long string, but now inline\") async plip() {}\n}\n",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 240
}
```

### Printed

```javascript

class Yo {
  @ foo(
    "\"hello\""
  ) async plop() {}
  @ anotherDecoratorWithALongName(
    "\"and a very long string as a first argument\""
  ) async plip() {}
  @ anotherDecoratorWithALongName(
    "\"another very long string, but now inline\""
  ) async plip() {}
}
```

### Diagnostics

```javascript
✔ No errors
```

