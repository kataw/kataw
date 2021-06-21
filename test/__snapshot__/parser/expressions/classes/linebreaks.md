# Kataw parser test case

## Input

`````js
class A {
  get
  a
  () {}

  set
  a
  (a) {}

  constructor
  () {}

  a
  () {}

  *
  a
  () {}

  static
  get
  a
  () {}

  static
  set
  a
  (a) {}

  static
  constructor
  () {}

  static
  a
  () {}

  static
  *
  a
  () {}
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
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticToken": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "get",
                                "rawText": "get",
                                "flags": 96,
                                "start": 9,
                                "end": 15
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 32,
                            "start": 9,
                            "end": 15
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
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 15,
                                    "end": 19
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 23,
                                    "end": 24
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 26,
                                        "end": 26
                                    },
                                    "flags": 32,
                                    "start": 24,
                                    "end": 27
                                },
                                "flags": 0,
                                "start": 19,
                                "end": 27
                            },
                            "flags": 0,
                            "start": 15,
                            "end": 27
                        },
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticToken": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "set",
                                "rawText": "set",
                                "flags": 96,
                                "start": 27,
                                "end": 34
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 32,
                            "start": 27,
                            "end": 34
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
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 34,
                                    "end": 38
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [
                                        {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 42,
                                            "end": 43
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 96,
                                    "start": 42,
                                    "end": 44
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 46,
                                        "end": 46
                                    },
                                    "flags": 32,
                                    "start": 44,
                                    "end": 47
                                },
                                "flags": 0,
                                "start": 38,
                                "end": 47
                            },
                            "flags": 0,
                            "start": 34,
                            "end": 47
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
                                    "start": 47,
                                    "end": 62
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 2048,
                                    "start": 66,
                                    "end": 67
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 69,
                                        "end": 69
                                    },
                                    "flags": 32,
                                    "start": 67,
                                    "end": 70
                                },
                                "flags": 2048,
                                "start": 62,
                                "end": 70
                            },
                            "flags": 2048,
                            "start": 47,
                            "end": 70
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
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 70,
                                    "end": 75
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 79,
                                    "end": 80
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 82,
                                        "end": 82
                                    },
                                    "flags": 32,
                                    "start": 80,
                                    "end": 83
                                },
                                "flags": 0,
                                "start": 75,
                                "end": 83
                            },
                            "flags": 0,
                            "start": 70,
                            "end": 83
                        },
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "asteriskToken": {
                                "kind": 67143222,
                                "flags": 65,
                                "start": 83,
                                "end": 88
                            },
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 88,
                                    "end": 92
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 96,
                                    "end": 97
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 99,
                                        "end": 99
                                    },
                                    "flags": 32,
                                    "start": 97,
                                    "end": 100
                                },
                                "flags": 0,
                                "start": 92,
                                "end": 100
                            },
                            "flags": 0,
                            "start": 83,
                            "end": 100
                        },
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticToken": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "static",
                                "rawText": "static",
                                "flags": 96,
                                "start": 100,
                                "end": 110
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 32,
                            "start": 100,
                            "end": 110
                        },
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticToken": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "get",
                                "rawText": "get",
                                "flags": 96,
                                "start": 110,
                                "end": 116
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 32,
                            "start": 110,
                            "end": 116
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
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 116,
                                    "end": 120
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 124,
                                    "end": 125
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 127,
                                        "end": 127
                                    },
                                    "flags": 32,
                                    "start": 125,
                                    "end": 128
                                },
                                "flags": 0,
                                "start": 120,
                                "end": 128
                            },
                            "flags": 0,
                            "start": 116,
                            "end": 128
                        },
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticToken": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "static",
                                "rawText": "static",
                                "flags": 96,
                                "start": 128,
                                "end": 138
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 32,
                            "start": 128,
                            "end": 138
                        },
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticToken": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "set",
                                "rawText": "set",
                                "flags": 96,
                                "start": 138,
                                "end": 144
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 32,
                            "start": 138,
                            "end": 144
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
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 144,
                                    "end": 148
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [
                                        {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 152,
                                            "end": 153
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 96,
                                    "start": 152,
                                    "end": 154
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 156,
                                        "end": 156
                                    },
                                    "flags": 32,
                                    "start": 154,
                                    "end": 157
                                },
                                "flags": 0,
                                "start": 148,
                                "end": 157
                            },
                            "flags": 0,
                            "start": 144,
                            "end": 157
                        },
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticToken": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "static",
                                "rawText": "static",
                                "flags": 96,
                                "start": 157,
                                "end": 167
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 32,
                            "start": 157,
                            "end": 167
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
                                    "start": 167,
                                    "end": 181
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 2048,
                                    "start": 185,
                                    "end": 186
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 188,
                                        "end": 188
                                    },
                                    "flags": 32,
                                    "start": 186,
                                    "end": 189
                                },
                                "flags": 2048,
                                "start": 181,
                                "end": 189
                            },
                            "flags": 2048,
                            "start": 167,
                            "end": 189
                        },
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticToken": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "static",
                                "rawText": "static",
                                "flags": 96,
                                "start": 189,
                                "end": 199
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 32,
                            "start": 189,
                            "end": 199
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
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 199,
                                    "end": 203
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 207,
                                    "end": 208
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 210,
                                        "end": 210
                                    },
                                    "flags": 32,
                                    "start": 208,
                                    "end": 211
                                },
                                "flags": 0,
                                "start": 203,
                                "end": 211
                            },
                            "flags": 0,
                            "start": 199,
                            "end": 211
                        },
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticToken": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "static",
                                "rawText": "static",
                                "flags": 96,
                                "start": 211,
                                "end": 221
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 32,
                            "start": 211,
                            "end": 221
                        },
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "asteriskToken": {
                                "kind": 67143222,
                                "flags": 65,
                                "start": 221,
                                "end": 225
                            },
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 225,
                                    "end": 229
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
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
                                        "start": 236,
                                        "end": 236
                                    },
                                    "flags": 32,
                                    "start": 234,
                                    "end": 237
                                },
                                "flags": 0,
                                "start": 229,
                                "end": 237
                            },
                            "flags": 0,
                            "start": 221,
                            "end": 237
                        }
                    ],
                    "flags": 32,
                    "start": 9,
                    "end": 237
                },
                "flags": 7,
                "start": 32,
                "end": 239
            },
            "flags": 16,
            "start": 0,
            "end": 239
        }
    ],
    "isModule": false,
    "source": "class A {\n  get\n  a\n  () {}\n\n  set\n  a\n  (a) {}\n\n  constructor\n  () {}\n\n  a\n  () {}\n\n  *\n  a\n  () {}\n\n  static\n  get\n  a\n  () {}\n\n  static\n  set\n  a\n  (a) {}\n\n  static\n  constructor\n  () {}\n\n  static\n  a\n  () {}\n\n  static\n  *\n  a\n  () {}\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 239
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ A class field cannot have a field named 'constructor' - start: 167, end: 181
✖ Multiple constructor implementations are not allowed - start: 189, end: 199

```

