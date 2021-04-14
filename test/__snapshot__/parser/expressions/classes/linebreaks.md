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
            "decorators": null,
            "classKeyword": {
                "kind": 37814352,
                "flags": 768,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 81921,
                "text": "A",
                "rawText": "A",
                "flags": 768,
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
                        "decorators": null,
                        "staticToken": null,
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 81921,
                                "text": "a",
                                "rawText": "a",
                                "flags": 768,
                                "start": 15,
                                "end": 19
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 8192,
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
                                    "flags": 256,
                                    "start": 26,
                                    "end": 26
                                },
                                "flags": 256,
                                "start": 24,
                                "end": 27
                            },
                            "flags": 8192,
                            "start": 19,
                            "end": 27
                        },
                        "flags": 256,
                        "start": 9,
                        "end": 27
                    },
                    {
                        "kind": 278,
                        "decorators": null,
                        "staticToken": null,
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 81921,
                                "text": "a",
                                "rawText": "a",
                                "flags": 768,
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
                                            "kind": 81921,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 768,
                                            "start": 42,
                                            "end": 43
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": null,
                                        "flags": 256,
                                        "start": 42,
                                        "end": 43
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 4352,
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
                                    "flags": 256,
                                    "start": 46,
                                    "end": 46
                                },
                                "flags": 256,
                                "start": 44,
                                "end": 47
                            },
                            "flags": 4096,
                            "start": 38,
                            "end": 47
                        },
                        "flags": 256,
                        "start": 27,
                        "end": 47
                    },
                    {
                        "kind": 278,
                        "decorators": null,
                        "staticToken": null,
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 81921,
                                "text": "constructor",
                                "rawText": "constructor",
                                "flags": 768,
                                "start": 47,
                                "end": 62
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
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
                                    "flags": 256,
                                    "start": 69,
                                    "end": 69
                                },
                                "flags": 256,
                                "start": 67,
                                "end": 70
                            },
                            "flags": 0,
                            "start": 62,
                            "end": 70
                        },
                        "flags": 256,
                        "start": 47,
                        "end": 70
                    },
                    {
                        "kind": 278,
                        "decorators": null,
                        "staticToken": null,
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 81921,
                                "text": "a",
                                "rawText": "a",
                                "flags": 768,
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
                                    "flags": 256,
                                    "start": 82,
                                    "end": 82
                                },
                                "flags": 256,
                                "start": 80,
                                "end": 83
                            },
                            "flags": 0,
                            "start": 75,
                            "end": 83
                        },
                        "flags": 256,
                        "start": 70,
                        "end": 83
                    },
                    {
                        "kind": 280,
                        "decorators": null,
                        "declaredToken": null,
                        "staticToken": null,
                        "key": {
                            "kind": 16637,
                            "text": "",
                            "autofix": 0,
                            "flags": 12,
                            "start": 83,
                            "end": 83
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 256,
                        "start": 83,
                        "end": 88
                    },
                    {
                        "kind": 278,
                        "decorators": null,
                        "staticToken": null,
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 81921,
                                "text": "a",
                                "rawText": "a",
                                "flags": 768,
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
                                    "flags": 256,
                                    "start": 99,
                                    "end": 99
                                },
                                "flags": 256,
                                "start": 97,
                                "end": 100
                            },
                            "flags": 0,
                            "start": 92,
                            "end": 100
                        },
                        "flags": 256,
                        "start": 88,
                        "end": 100
                    },
                    {
                        "kind": 278,
                        "decorators": null,
                        "staticToken": {
                            "kind": 8388716,
                            "flags": 768,
                            "start": 100,
                            "end": 110
                        },
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 81921,
                                "text": "a",
                                "rawText": "a",
                                "flags": 768,
                                "start": 116,
                                "end": 120
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 8192,
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
                                    "flags": 256,
                                    "start": 127,
                                    "end": 127
                                },
                                "flags": 256,
                                "start": 125,
                                "end": 128
                            },
                            "flags": 8192,
                            "start": 120,
                            "end": 128
                        },
                        "flags": 256,
                        "start": 110,
                        "end": 128
                    },
                    {
                        "kind": 278,
                        "decorators": null,
                        "staticToken": {
                            "kind": 8388716,
                            "flags": 768,
                            "start": 128,
                            "end": 138
                        },
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 81921,
                                "text": "a",
                                "rawText": "a",
                                "flags": 768,
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
                                            "kind": 81921,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 768,
                                            "start": 152,
                                            "end": 153
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": null,
                                        "flags": 256,
                                        "start": 152,
                                        "end": 153
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 4352,
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
                                    "flags": 256,
                                    "start": 156,
                                    "end": 156
                                },
                                "flags": 256,
                                "start": 154,
                                "end": 157
                            },
                            "flags": 4096,
                            "start": 148,
                            "end": 157
                        },
                        "flags": 256,
                        "start": 138,
                        "end": 157
                    },
                    {
                        "kind": 278,
                        "decorators": null,
                        "staticToken": {
                            "kind": 8388716,
                            "flags": 768,
                            "start": 157,
                            "end": 167
                        },
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 81921,
                                "text": "constructor",
                                "rawText": "constructor",
                                "flags": 768,
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
                                    "flags": 256,
                                    "start": 188,
                                    "end": 188
                                },
                                "flags": 256,
                                "start": 186,
                                "end": 189
                            },
                            "flags": 0,
                            "start": 181,
                            "end": 189
                        },
                        "flags": 256,
                        "start": 167,
                        "end": 189
                    },
                    {
                        "kind": 278,
                        "decorators": null,
                        "staticToken": {
                            "kind": 8388716,
                            "flags": 768,
                            "start": 189,
                            "end": 199
                        },
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 81921,
                                "text": "a",
                                "rawText": "a",
                                "flags": 768,
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
                                    "flags": 256,
                                    "start": 210,
                                    "end": 210
                                },
                                "flags": 256,
                                "start": 208,
                                "end": 211
                            },
                            "flags": 0,
                            "start": 203,
                            "end": 211
                        },
                        "flags": 256,
                        "start": 199,
                        "end": 211
                    },
                    {
                        "kind": 280,
                        "decorators": null,
                        "declaredToken": null,
                        "staticToken": {
                            "kind": 8388716,
                            "flags": 768,
                            "start": 211,
                            "end": 221
                        },
                        "key": {
                            "kind": 16637,
                            "text": "",
                            "autofix": 0,
                            "flags": 12,
                            "start": 221,
                            "end": 221
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 256,
                        "start": 221,
                        "end": 225
                    },
                    {
                        "kind": 278,
                        "decorators": null,
                        "staticToken": null,
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 81921,
                                "text": "a",
                                "rawText": "a",
                                "flags": 768,
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
                                    "flags": 256,
                                    "start": 236,
                                    "end": 236
                                },
                                "flags": 256,
                                "start": 234,
                                "end": 237
                            },
                            "flags": 0,
                            "start": 229,
                            "end": 237
                        },
                        "flags": 256,
                        "start": 225,
                        "end": 237
                    }
                ],
                "flags": 256,
                "start": 9,
                "end": 239
            },
            "flags": 128,
            "start": 0,
            "end": 239
        }
    ],
    "isModule": false,
    "text": "class A {\n  get\n  a\n  () {}\n\n  set\n  a\n  (a) {}\n\n  constructor\n  () {}\n\n  a\n  () {}\n\n  *\n  a\n  () {}\n\n  static\n  get\n  a\n  () {}\n\n  static\n  set\n  a\n  (a) {}\n\n  static\n  constructor\n  () {}\n\n  static\n  a\n  () {}\n\n  static\n  *\n  a\n  () {}\n}",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 18,
            "error": "A rest element cannot have an initializer",
            "start": 83,
            "end": 88
        },
        {
            "kind": 2,
            "source": 2,
            "code": 18,
            "error": "A rest element cannot have an initializer",
            "start": 221,
            "end": 225
        }
    ],
    "start": 0,
    "end": 239
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

