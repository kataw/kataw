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

### Hybrid CST

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
                "flags": 0,
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
            "classHeritage": null,
            "members": {
                "kind": 277,
                "elements": [
                    {
                        "kind": 278,
                        "declareToken": null,
                        "decorators": null,
                        "staticKeyword": null,
                        "asyncKeyword": null,
                        "setKeyword": {
                            "kind": 82031,
                            "flags": 64,
                            "start": 9,
                            "end": 15
                        },
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
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 1024,
                                "start": 23,
                                "end": 24
                            },
                            "type": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "multiline": false,
                                    "flags": 32,
                                    "start": 26,
                                    "end": 26
                                },
                                "flags": 32,
                                "start": 24,
                                "end": 27
                            },
                            "flags": 1024,
                            "start": 19,
                            "end": 27
                        },
                        "flags": 1024,
                        "start": 9,
                        "end": 27
                    },
                    {
                        "kind": 278,
                        "declareToken": null,
                        "decorators": null,
                        "staticKeyword": null,
                        "asyncKeyword": null,
                        "setKeyword": null,
                        "getKeyword": {
                            "kind": 82031,
                            "flags": 64,
                            "start": 27,
                            "end": 34
                        },
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
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [
                                    {
                                        "kind": 215,
                                        "ellipsisToken": null,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 42,
                                            "end": 43
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": null,
                                        "flags": 32,
                                        "start": 42,
                                        "end": 43
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 544,
                                "start": 42,
                                "end": 44
                            },
                            "type": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "multiline": false,
                                    "flags": 32,
                                    "start": 46,
                                    "end": 46
                                },
                                "flags": 32,
                                "start": 44,
                                "end": 47
                            },
                            "flags": 512,
                            "start": 38,
                            "end": 47
                        },
                        "flags": 512,
                        "start": 27,
                        "end": 47
                    },
                    {
                        "kind": 278,
                        "declareToken": null,
                        "decorators": null,
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
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 2048,
                                "start": 66,
                                "end": 67
                            },
                            "type": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "multiline": false,
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
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "start": 79,
                                "end": 80
                            },
                            "type": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "multiline": false,
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
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "start": 96,
                                "end": 97
                            },
                            "type": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "multiline": false,
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
                        "kind": 278,
                        "declareToken": null,
                        "decorators": null,
                        "staticKeyword": {
                            "kind": 8388716,
                            "flags": 64,
                            "start": 100,
                            "end": 110
                        },
                        "asyncKeyword": null,
                        "setKeyword": {
                            "kind": 82031,
                            "flags": 64,
                            "start": 110,
                            "end": 116
                        },
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
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 1024,
                                "start": 124,
                                "end": 125
                            },
                            "type": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "multiline": false,
                                    "flags": 32,
                                    "start": 127,
                                    "end": 127
                                },
                                "flags": 32,
                                "start": 125,
                                "end": 128
                            },
                            "flags": 1024,
                            "start": 120,
                            "end": 128
                        },
                        "flags": 1024,
                        "start": 110,
                        "end": 128
                    },
                    {
                        "kind": 278,
                        "declareToken": null,
                        "decorators": null,
                        "staticKeyword": {
                            "kind": 8388716,
                            "flags": 64,
                            "start": 128,
                            "end": 138
                        },
                        "asyncKeyword": null,
                        "setKeyword": null,
                        "getKeyword": {
                            "kind": 82031,
                            "flags": 64,
                            "start": 138,
                            "end": 144
                        },
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
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [
                                    {
                                        "kind": 215,
                                        "ellipsisToken": null,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 152,
                                            "end": 153
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": null,
                                        "flags": 32,
                                        "start": 152,
                                        "end": 153
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 544,
                                "start": 152,
                                "end": 154
                            },
                            "type": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "multiline": false,
                                    "flags": 32,
                                    "start": 156,
                                    "end": 156
                                },
                                "flags": 32,
                                "start": 154,
                                "end": 157
                            },
                            "flags": 512,
                            "start": 148,
                            "end": 157
                        },
                        "flags": 512,
                        "start": 138,
                        "end": 157
                    },
                    {
                        "kind": 278,
                        "declareToken": null,
                        "decorators": null,
                        "staticKeyword": {
                            "kind": 8388716,
                            "flags": 64,
                            "start": 157,
                            "end": 167
                        },
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
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "start": 185,
                                "end": 186
                            },
                            "type": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "multiline": false,
                                    "flags": 32,
                                    "start": 188,
                                    "end": 188
                                },
                                "flags": 32,
                                "start": 186,
                                "end": 189
                            },
                            "flags": 0,
                            "start": 181,
                            "end": 189
                        },
                        "flags": 0,
                        "start": 167,
                        "end": 189
                    },
                    {
                        "kind": 278,
                        "declareToken": null,
                        "decorators": null,
                        "staticKeyword": {
                            "kind": 8388716,
                            "flags": 64,
                            "start": 189,
                            "end": 199
                        },
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
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "start": 207,
                                "end": 208
                            },
                            "type": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "multiline": false,
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
                        "kind": 278,
                        "declareToken": null,
                        "decorators": null,
                        "staticKeyword": {
                            "kind": 8388716,
                            "flags": 64,
                            "start": 211,
                            "end": 221
                        },
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
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "start": 233,
                                "end": 234
                            },
                            "type": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "multiline": false,
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
                "end": 239
            },
            "flags": 16,
            "start": 0,
            "end": 239
        }
    ],
    "isModule": false,
    "text": "class A {\n  get\n  a\n  () {}\n\n  set\n  a\n  (a) {}\n\n  constructor\n  () {}\n\n  a\n  () {}\n\n  *\n  a\n  () {}\n\n  static\n  get\n  a\n  () {}\n\n  static\n  set\n  a\n  (a) {}\n\n  static\n  constructor\n  () {}\n\n  static\n  a\n  () {}\n\n  static\n  *\n  a\n  () {}\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 239
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

