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
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 262,
                    "elements": [
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
                                    "text": "get",
                                    "rawText": "get",
                                    "flags": 96,
                                    "start": 9,
                                    "end": 15
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 19,
                                    "end": 20
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 22,
                                        "end": 22
                                    },
                                    "flags": 32,
                                    "start": 20,
                                    "end": 23
                                },
                                "flags": 0,
                                "start": 15,
                                "end": 23
                            },
                            "flags": 0,
                            "start": 9,
                            "end": 23
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
                                    "text": "set",
                                    "rawText": "set",
                                    "flags": 96,
                                    "start": 23,
                                    "end": 30
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 34,
                                    "end": 35
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 37,
                                        "end": 37
                                    },
                                    "flags": 32,
                                    "start": 35,
                                    "end": 38
                                },
                                "flags": 0,
                                "start": 30,
                                "end": 38
                            },
                            "flags": 0,
                            "start": 23,
                            "end": 38
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
                                    "text": "static",
                                    "rawText": "static",
                                    "flags": 96,
                                    "start": 38,
                                    "end": 48
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 52,
                                    "end": 53
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 55,
                                        "end": 55
                                    },
                                    "flags": 32,
                                    "start": 53,
                                    "end": 56
                                },
                                "flags": 0,
                                "start": 48,
                                "end": 56
                            },
                            "flags": 0,
                            "start": 38,
                            "end": 56
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
                                    "text": "async",
                                    "rawText": "async",
                                    "flags": 96,
                                    "start": 56,
                                    "end": 65
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 69,
                                    "end": 70
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 72,
                                        "end": 72
                                    },
                                    "flags": 32,
                                    "start": 70,
                                    "end": 73
                                },
                                "flags": 0,
                                "start": 65,
                                "end": 73
                            },
                            "flags": 0,
                            "start": 56,
                            "end": 73
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
                                    "kind": 201392131,
                                    "text": "get",
                                    "rawText": "'get'",
                                    "flags": 4194401,
                                    "start": 73,
                                    "end": 83
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 87,
                                    "end": 88
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 90,
                                        "end": 90
                                    },
                                    "flags": 32,
                                    "start": 88,
                                    "end": 91
                                },
                                "flags": 0,
                                "start": 83,
                                "end": 91
                            },
                            "flags": 0,
                            "start": 73,
                            "end": 91
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
                                    "kind": 201392131,
                                    "text": "set",
                                    "rawText": "'set'",
                                    "flags": 4194401,
                                    "start": 91,
                                    "end": 100
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 104,
                                    "end": 105
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 107,
                                        "end": 107
                                    },
                                    "flags": 32,
                                    "start": 105,
                                    "end": 108
                                },
                                "flags": 0,
                                "start": 100,
                                "end": 108
                            },
                            "flags": 0,
                            "start": 91,
                            "end": 108
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
                                    "kind": 201392131,
                                    "text": "async",
                                    "rawText": "'async'",
                                    "flags": 4194401,
                                    "start": 108,
                                    "end": 119
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 123,
                                    "end": 124
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 126,
                                        "end": 126
                                    },
                                    "flags": 32,
                                    "start": 124,
                                    "end": 127
                                },
                                "flags": 0,
                                "start": 119,
                                "end": 127
                            },
                            "flags": 0,
                            "start": 108,
                            "end": 127
                        },
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "generatorToken": null,
                            "staticKeyword": {
                                "kind": 8388716,
                                "flags": 64,
                                "start": 127,
                                "end": 138
                            },
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "get",
                                    "rawText": "get",
                                    "flags": 96,
                                    "start": 138,
                                    "end": 144
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 148,
                                    "end": 149
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 151,
                                        "end": 151
                                    },
                                    "flags": 32,
                                    "start": 149,
                                    "end": 152
                                },
                                "flags": 0,
                                "start": 144,
                                "end": 152
                            },
                            "flags": 0,
                            "start": 138,
                            "end": 152
                        },
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "generatorToken": null,
                            "staticKeyword": {
                                "kind": 8388716,
                                "flags": 64,
                                "start": 152,
                                "end": 162
                            },
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "set",
                                    "rawText": "set",
                                    "flags": 96,
                                    "start": 162,
                                    "end": 168
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 172,
                                    "end": 173
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 175,
                                        "end": 175
                                    },
                                    "flags": 32,
                                    "start": 173,
                                    "end": 176
                                },
                                "flags": 0,
                                "start": 168,
                                "end": 176
                            },
                            "flags": 0,
                            "start": 162,
                            "end": 176
                        },
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "generatorToken": null,
                            "staticKeyword": {
                                "kind": 8388716,
                                "flags": 64,
                                "start": 176,
                                "end": 186
                            },
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "static",
                                    "rawText": "static",
                                    "flags": 96,
                                    "start": 186,
                                    "end": 195
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 199,
                                    "end": 200
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 202,
                                        "end": 202
                                    },
                                    "flags": 32,
                                    "start": 200,
                                    "end": 203
                                },
                                "flags": 0,
                                "start": 195,
                                "end": 203
                            },
                            "flags": 0,
                            "start": 186,
                            "end": 203
                        },
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "generatorToken": null,
                            "staticKeyword": {
                                "kind": 8388716,
                                "flags": 64,
                                "start": 203,
                                "end": 213
                            },
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "async",
                                    "rawText": "async",
                                    "flags": 96,
                                    "start": 213,
                                    "end": 221
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 225,
                                    "end": 226
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 228,
                                        "end": 228
                                    },
                                    "flags": 32,
                                    "start": 226,
                                    "end": 229
                                },
                                "flags": 0,
                                "start": 221,
                                "end": 229
                            },
                            "flags": 0,
                            "start": 213,
                            "end": 229
                        },
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "generatorToken": null,
                            "staticKeyword": {
                                "kind": 8388716,
                                "flags": 64,
                                "start": 229,
                                "end": 239
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
                                    "start": 239,
                                    "end": 243
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 247,
                                    "end": 248
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 250,
                                        "end": 250
                                    },
                                    "flags": 32,
                                    "start": 248,
                                    "end": 251
                                },
                                "flags": 0,
                                "start": 243,
                                "end": 251
                            },
                            "flags": 0,
                            "start": 239,
                            "end": 251
                        },
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "generatorToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": {
                                "kind": 16498,
                                "flags": 65,
                                "start": 251,
                                "end": 259
                            },
                            "getKeyword": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "async",
                                    "rawText": "async",
                                    "flags": 96,
                                    "start": 259,
                                    "end": 267
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 1024,
                                    "start": 271,
                                    "end": 272
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 274,
                                        "end": 274
                                    },
                                    "flags": 32,
                                    "start": 272,
                                    "end": 275
                                },
                                "flags": 1024,
                                "start": 267,
                                "end": 275
                            },
                            "flags": 1024,
                            "start": 251,
                            "end": 275
                        },
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "generatorToken": null,
                            "staticKeyword": {
                                "kind": 8388716,
                                "flags": 64,
                                "start": 275,
                                "end": 286
                            },
                            "asyncKeyword": null,
                            "setKeyword": {
                                "kind": 16498,
                                "flags": 65,
                                "start": 286,
                                "end": 292
                            },
                            "getKeyword": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "static",
                                    "rawText": "static",
                                    "flags": 96,
                                    "start": 292,
                                    "end": 301
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 1024,
                                    "start": 305,
                                    "end": 306
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 308,
                                        "end": 308
                                    },
                                    "flags": 32,
                                    "start": 306,
                                    "end": 309
                                },
                                "flags": 1024,
                                "start": 301,
                                "end": 309
                            },
                            "flags": 1024,
                            "start": 286,
                            "end": 309
                        }
                    ],
                    "flags": 32,
                    "start": 9,
                    "end": 309
                },
                "flags": 7,
                "start": 32,
                "end": 311
            },
            "flags": 16,
            "start": 0,
            "end": 311
        }
    ],
    "isModule": true,
    "source": "class A {\n  get\n  () {}\n\n  set\n  () {}\n\n  static\n  () {}\n\n  async\n  () {}\n\n\n  'get'\n  () {}\n\n  'set'\n  () {}\n\n  'async'\n  () {}\n\n\n  static\n  get\n  () {}\n\n  static\n  set\n  () {}\n\n  static\n  static\n  () {}\n\n  static\n  async\n  () {}\n\n  static\n  a\n  () {}\n\n\n  get\n  async\n  () {}\n\n\n  static\n  get\n  static\n  () {}\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 311
}
```

### Printed

```javascript

class A {
  get() {}
  set() {}
  static() {}
  async() {}
  "'get'"() {}
  "'set'"() {}
  "'async'"() {}
  static static get() {}
  static static set() {}
  static static static() {}
  static static async() {}
  static static a() {}
  get async() {}
  static get static static() {}
}
```

### Diagnostics

```javascript
✔ No errors
```

