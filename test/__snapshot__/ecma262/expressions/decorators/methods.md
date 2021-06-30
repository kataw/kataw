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
                "flags": 80,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "Yo",
                "rawText": "Yo",
                "flags": 96,
                "start": 5,
                "end": 8
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
                                            "start": 10,
                                            "end": 14
                                        },
                                        "expression": {
                                            "kind": 131,
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "foo",
                                                "rawText": "foo",
                                                "flags": 96,
                                                "start": 14,
                                                "end": 17
                                            },
                                            "argumentList": {
                                                "kind": 256,
                                                "elements": [
                                                    {
                                                        "kind": 201392131,
                                                        "text": "hello",
                                                        "rawText": "\"hello\"",
                                                        "flags": 96,
                                                        "start": 18,
                                                        "end": 25
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 18,
                                                "end": 25
                                            },
                                            "flags": 268435488,
                                            "start": 14,
                                            "end": 26
                                        },
                                        "flags": 0,
                                        "start": 14,
                                        "end": 26
                                    }
                                ],
                                "flags": 32,
                                "start": 10,
                                "end": 26
                            },
                            "staticKeyword": null,
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 65,
                                "start": 10,
                                "end": 34
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
                                    "start": 34,
                                    "end": 39
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "start": 40,
                                    "end": 41
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 43,
                                        "end": 43
                                    },
                                    "flags": 32,
                                    "start": 41,
                                    "end": 44
                                },
                                "flags": 256,
                                "start": 39,
                                "end": 44
                            },
                            "flags": 256,
                            "start": 10,
                            "end": 44
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
                                            "start": 44,
                                            "end": 49
                                        },
                                        "expression": {
                                            "kind": 131,
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "anotherDecoratorWithALongName",
                                                "rawText": "anotherDecoratorWithALongName",
                                                "flags": 96,
                                                "start": 49,
                                                "end": 78
                                            },
                                            "argumentList": {
                                                "kind": 256,
                                                "elements": [
                                                    {
                                                        "kind": 201392131,
                                                        "text": "and a very long string as a first argument",
                                                        "rawText": "\"and a very long string as a first argument\"",
                                                        "flags": 96,
                                                        "start": 79,
                                                        "end": 123
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 79,
                                                "end": 123
                                            },
                                            "flags": 268435488,
                                            "start": 49,
                                            "end": 124
                                        },
                                        "flags": 0,
                                        "start": 49,
                                        "end": 124
                                    }
                                ],
                                "flags": 32,
                                "start": 44,
                                "end": 124
                            },
                            "staticKeyword": null,
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 65,
                                "start": 44,
                                "end": 132
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
                                    "start": 132,
                                    "end": 137
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "start": 138,
                                    "end": 139
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 141,
                                        "end": 141
                                    },
                                    "flags": 32,
                                    "start": 139,
                                    "end": 142
                                },
                                "flags": 256,
                                "start": 137,
                                "end": 142
                            },
                            "flags": 256,
                            "start": 44,
                            "end": 142
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
                                            "start": 142,
                                            "end": 147
                                        },
                                        "expression": {
                                            "kind": 131,
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "anotherDecoratorWithALongName",
                                                "rawText": "anotherDecoratorWithALongName",
                                                "flags": 96,
                                                "start": 147,
                                                "end": 176
                                            },
                                            "argumentList": {
                                                "kind": 256,
                                                "elements": [
                                                    {
                                                        "kind": 201392131,
                                                        "text": "another very long string, but now inline",
                                                        "rawText": "\"another very long string, but now inline\"",
                                                        "flags": 96,
                                                        "start": 177,
                                                        "end": 219
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 177,
                                                "end": 219
                                            },
                                            "flags": 268435488,
                                            "start": 147,
                                            "end": 220
                                        },
                                        "flags": 0,
                                        "start": 147,
                                        "end": 220
                                    }
                                ],
                                "flags": 32,
                                "start": 142,
                                "end": 220
                            },
                            "staticKeyword": null,
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 64,
                                "start": 142,
                                "end": 226
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
                                    "start": 226,
                                    "end": 231
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "start": 232,
                                    "end": 233
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 235,
                                        "end": 235
                                    },
                                    "flags": 32,
                                    "start": 233,
                                    "end": 236
                                },
                                "flags": 256,
                                "start": 231,
                                "end": 236
                            },
                            "flags": 256,
                            "start": 142,
                            "end": 236
                        }
                    ],
                    "flags": 32,
                    "start": 10,
                    "end": 236
                },
                "flags": 8,
                "start": 32,
                "end": 238
            },
            "flags": 16,
            "start": 0,
            "end": 238
        }
    ],
    "isModule": false,
    "source": "class Yo {\n  @foo(\"hello\")\n  async plop() {}\n\n  @anotherDecoratorWithALongName(\"and a very long string as a first argument\")\n  async plip() {}\n\n  @anotherDecoratorWithALongName(\"another very long string, but now inline\") async plip() {}\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 238
}
```

### Printed

```javascript

class Yo {
  @foo('"hello"')
  async plop() { }
  @anotherDecoratorWithALongName('"and a very long string as a first argument"')
  async plip() { }
  @anotherDecoratorWithALongName('"another very long string, but now inline"')
  async plip() { }
}

```

### Diagnostics

```javascript
✔ No errors
```

