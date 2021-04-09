# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true, module: true }
`````


## Input

`````js
class A {
  get
  () {}

  set
  () {}

  static
  () {}

  async
  () {}


  'get'
  () {}

  'set'
  () {}

  'async'
  () {}


  static
  get
  () {}

  static
  set
  () {}

  static
  static
  () {}

  static
  async
  () {}

  static
  a
  () {}


  get
  async
  () {}


  static
  get
  static
  () {}
}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 178,
            "decorators": null,
            "name": {
                "kind": 81921,
                "value": "A",
                "autofix": 0,
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
                                "value": "get",
                                "autofix": 0,
                                "flags": 768,
                                "start": 9,
                                "end": 15
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 19,
                                "end": 20
                            },
                            "type": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "statements": [],
                                    "multiline": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 22,
                                    "end": 22
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 20,
                                "end": 23
                            },
                            "autofix": 0,
                            "flags": 0,
                            "start": 15,
                            "end": 23
                        },
                        "flags": 256,
                        "start": 9,
                        "end": 23
                    },
                    {
                        "kind": 278,
                        "decorators": null,
                        "staticToken": null,
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 81921,
                                "value": "set",
                                "autofix": 0,
                                "flags": 768,
                                "start": 23,
                                "end": 30
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 34,
                                "end": 35
                            },
                            "type": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "statements": [],
                                    "multiline": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 37,
                                    "end": 37
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 35,
                                "end": 38
                            },
                            "autofix": 0,
                            "flags": 0,
                            "start": 30,
                            "end": 38
                        },
                        "flags": 256,
                        "start": 23,
                        "end": 38
                    },
                    {
                        "kind": 278,
                        "decorators": null,
                        "staticToken": null,
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 81921,
                                "value": "static",
                                "autofix": 0,
                                "flags": 768,
                                "start": 38,
                                "end": 48
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 52,
                                "end": 53
                            },
                            "type": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "statements": [],
                                    "multiline": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 55,
                                    "end": 55
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 53,
                                "end": 56
                            },
                            "autofix": 0,
                            "flags": 0,
                            "start": 48,
                            "end": 56
                        },
                        "flags": 256,
                        "start": 38,
                        "end": 56
                    },
                    {
                        "kind": 278,
                        "decorators": null,
                        "staticToken": null,
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 81921,
                                "value": "async",
                                "autofix": 0,
                                "flags": 768,
                                "start": 56,
                                "end": 65
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 69,
                                "end": 70
                            },
                            "type": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "statements": [],
                                    "multiline": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 72,
                                    "end": 72
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 70,
                                "end": 73
                            },
                            "autofix": 0,
                            "flags": 0,
                            "start": 65,
                            "end": 73
                        },
                        "flags": 256,
                        "start": 56,
                        "end": 73
                    },
                    {
                        "kind": 278,
                        "decorators": null,
                        "staticToken": null,
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 67174403,
                                "value": "get",
                                "autofix": 0,
                                "flags": 768,
                                "start": 73,
                                "end": 83
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 87,
                                "end": 88
                            },
                            "type": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "statements": [],
                                    "multiline": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 90,
                                    "end": 90
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 88,
                                "end": 91
                            },
                            "autofix": 0,
                            "flags": 0,
                            "start": 83,
                            "end": 91
                        },
                        "flags": 256,
                        "start": 73,
                        "end": 91
                    },
                    {
                        "kind": 278,
                        "decorators": null,
                        "staticToken": null,
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 67174403,
                                "value": "set",
                                "autofix": 0,
                                "flags": 768,
                                "start": 91,
                                "end": 100
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 104,
                                "end": 105
                            },
                            "type": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "statements": [],
                                    "multiline": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 107,
                                    "end": 107
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 105,
                                "end": 108
                            },
                            "autofix": 0,
                            "flags": 0,
                            "start": 100,
                            "end": 108
                        },
                        "flags": 256,
                        "start": 91,
                        "end": 108
                    },
                    {
                        "kind": 278,
                        "decorators": null,
                        "staticToken": null,
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 67174403,
                                "value": "async",
                                "autofix": 0,
                                "flags": 768,
                                "start": 108,
                                "end": 119
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 123,
                                "end": 124
                            },
                            "type": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "statements": [],
                                    "multiline": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 126,
                                    "end": 126
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 124,
                                "end": 127
                            },
                            "autofix": 0,
                            "flags": 0,
                            "start": 119,
                            "end": 127
                        },
                        "flags": 256,
                        "start": 108,
                        "end": 127
                    },
                    {
                        "kind": 278,
                        "decorators": null,
                        "staticToken": {
                            "kind": 8388716,
                            "autofix": 0,
                            "flags": 0,
                            "start": 127,
                            "end": 138
                        },
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 81921,
                                "value": "get",
                                "autofix": 0,
                                "flags": 768,
                                "start": 138,
                                "end": 144
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 148,
                                "end": 149
                            },
                            "type": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "statements": [],
                                    "multiline": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 151,
                                    "end": 151
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 149,
                                "end": 152
                            },
                            "autofix": 0,
                            "flags": 0,
                            "start": 144,
                            "end": 152
                        },
                        "flags": 256,
                        "start": 138,
                        "end": 152
                    },
                    {
                        "kind": 278,
                        "decorators": null,
                        "staticToken": {
                            "kind": 8388716,
                            "autofix": 0,
                            "flags": 0,
                            "start": 152,
                            "end": 162
                        },
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 81921,
                                "value": "set",
                                "autofix": 0,
                                "flags": 768,
                                "start": 162,
                                "end": 168
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 172,
                                "end": 173
                            },
                            "type": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "statements": [],
                                    "multiline": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 175,
                                    "end": 175
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 173,
                                "end": 176
                            },
                            "autofix": 0,
                            "flags": 0,
                            "start": 168,
                            "end": 176
                        },
                        "flags": 256,
                        "start": 162,
                        "end": 176
                    },
                    {
                        "kind": 278,
                        "decorators": null,
                        "staticToken": {
                            "kind": 8388716,
                            "autofix": 0,
                            "flags": 0,
                            "start": 176,
                            "end": 186
                        },
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 81921,
                                "value": "static",
                                "autofix": 0,
                                "flags": 768,
                                "start": 186,
                                "end": 195
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 199,
                                "end": 200
                            },
                            "type": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "statements": [],
                                    "multiline": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 202,
                                    "end": 202
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 200,
                                "end": 203
                            },
                            "autofix": 0,
                            "flags": 0,
                            "start": 195,
                            "end": 203
                        },
                        "flags": 256,
                        "start": 186,
                        "end": 203
                    },
                    {
                        "kind": 278,
                        "decorators": null,
                        "staticToken": {
                            "kind": 8388716,
                            "autofix": 0,
                            "flags": 0,
                            "start": 203,
                            "end": 213
                        },
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 81921,
                                "value": "async",
                                "autofix": 0,
                                "flags": 768,
                                "start": 213,
                                "end": 221
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 225,
                                "end": 226
                            },
                            "type": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "statements": [],
                                    "multiline": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 228,
                                    "end": 228
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 226,
                                "end": 229
                            },
                            "autofix": 0,
                            "flags": 0,
                            "start": 221,
                            "end": 229
                        },
                        "flags": 256,
                        "start": 213,
                        "end": 229
                    },
                    {
                        "kind": 278,
                        "decorators": null,
                        "staticToken": {
                            "kind": 8388716,
                            "autofix": 0,
                            "flags": 0,
                            "start": 229,
                            "end": 239
                        },
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 81921,
                                "value": "a",
                                "autofix": 0,
                                "flags": 768,
                                "start": 239,
                                "end": 243
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 247,
                                "end": 248
                            },
                            "type": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "statements": [],
                                    "multiline": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 250,
                                    "end": 250
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 248,
                                "end": 251
                            },
                            "autofix": 0,
                            "flags": 0,
                            "start": 243,
                            "end": 251
                        },
                        "flags": 256,
                        "start": 239,
                        "end": 251
                    },
                    {
                        "kind": 278,
                        "decorators": null,
                        "staticToken": null,
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 81921,
                                "value": "async",
                                "autofix": 0,
                                "flags": 768,
                                "start": 259,
                                "end": 267
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 271,
                                "end": 272
                            },
                            "type": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "statements": [],
                                    "multiline": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 274,
                                    "end": 274
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 272,
                                "end": 275
                            },
                            "autofix": 0,
                            "flags": 8192,
                            "start": 267,
                            "end": 275
                        },
                        "flags": 256,
                        "start": 251,
                        "end": 275
                    },
                    {
                        "kind": 278,
                        "decorators": null,
                        "staticToken": {
                            "kind": 8388716,
                            "autofix": 0,
                            "flags": 0,
                            "start": 275,
                            "end": 286
                        },
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 81921,
                                "value": "static",
                                "autofix": 0,
                                "flags": 768,
                                "start": 292,
                                "end": 301
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 305,
                                "end": 306
                            },
                            "type": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "statements": [],
                                    "multiline": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 308,
                                    "end": 308
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 306,
                                "end": 309
                            },
                            "autofix": 0,
                            "flags": 8192,
                            "start": 301,
                            "end": 309
                        },
                        "flags": 256,
                        "start": 286,
                        "end": 309
                    }
                ],
                "flags": 256,
                "start": 9,
                "end": 311
            },
            "flags": 128,
            "start": 0,
            "end": 311
        }
    ],
    "isModule": true,
    "text": "class A {\n  get\n  () {}\n\n  set\n  () {}\n\n  static\n  () {}\n\n  async\n  () {}\n\n\n  'get'\n  () {}\n\n  'set'\n  () {}\n\n  'async'\n  () {}\n\n\n  static\n  get\n  () {}\n\n  static\n  set\n  () {}\n\n  static\n  static\n  () {}\n\n  static\n  async\n  () {}\n\n  static\n  a\n  () {}\n\n\n  get\n  async\n  () {}\n\n\n  static\n  get\n  static\n  () {}\n}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 311
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

