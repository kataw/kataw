# Kataw parser test case

## Input

`````js
class Foo {
  f(/* ... */) {}
  f() /* ... */ {}
  f = (/* ... */) => {};
  static f(/* ... */) {};
  static f = (/* ... */) => {};
  static f = function(/* ... */) {};
  static f = function f(/* ... */) {};
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
                "text": "Foo",
                "rawText": "Foo",
                "flags": 96,
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
                                    "text": "f",
                                    "rawText": "f",
                                    "flags": 96,
                                    "start": 11,
                                    "end": 15
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 16,
                                    "end": 26
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 28,
                                        "end": 28
                                    },
                                    "flags": 32,
                                    "start": 26,
                                    "end": 29
                                },
                                "flags": 0,
                                "start": 15,
                                "end": 29
                            },
                            "flags": 0,
                            "start": 11,
                            "end": 29
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
                                    "text": "f",
                                    "rawText": "f",
                                    "flags": 96,
                                    "start": 29,
                                    "end": 33
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
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
                                        "start": 47,
                                        "end": 47
                                    },
                                    "flags": 32,
                                    "start": 35,
                                    "end": 48
                                },
                                "flags": 0,
                                "start": 33,
                                "end": 48
                            },
                            "flags": 0,
                            "start": 29,
                            "end": 48
                        },
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticToken": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "f",
                                "rawText": "f",
                                "flags": 96,
                                "start": 48,
                                "end": 52
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": {
                                "kind": 271,
                                "asyncKeyword": null,
                                "typeParameters": null,
                                "arrowPatameterList": {
                                    "kind": 342,
                                    "parameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 56,
                                    "end": 56
                                },
                                "returnType": null,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "start": 66,
                                    "end": 69
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 71,
                                        "end": 71
                                    },
                                    "flags": 32,
                                    "start": 69,
                                    "end": 72
                                },
                                "flags": 32,
                                "start": 54,
                                "end": 72
                            },
                            "flags": 32,
                            "start": 48,
                            "end": 72
                        },
                        {
                            "kind": 317,
                            "flags": 96,
                            "start": 72,
                            "end": 73
                        },
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "staticKeyword": {
                                "kind": 8388716,
                                "flags": 64,
                                "start": 73,
                                "end": 82
                            },
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "asteriskToken": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "f",
                                    "rawText": "f",
                                    "flags": 96,
                                    "start": 82,
                                    "end": 84
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 85,
                                    "end": 95
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 97,
                                        "end": 97
                                    },
                                    "flags": 32,
                                    "start": 95,
                                    "end": 98
                                },
                                "flags": 0,
                                "start": 84,
                                "end": 98
                            },
                            "flags": 0,
                            "start": 82,
                            "end": 98
                        },
                        {
                            "kind": 317,
                            "flags": 96,
                            "start": 98,
                            "end": 99
                        },
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticToken": {
                                "kind": 8388716,
                                "flags": 64,
                                "start": 99,
                                "end": 108
                            },
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "f",
                                "rawText": "f",
                                "flags": 96,
                                "start": 108,
                                "end": 110
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": {
                                "kind": 271,
                                "asyncKeyword": null,
                                "typeParameters": null,
                                "arrowPatameterList": {
                                    "kind": 342,
                                    "parameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 114,
                                    "end": 114
                                },
                                "returnType": null,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "start": 124,
                                    "end": 127
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 129,
                                        "end": 129
                                    },
                                    "flags": 32,
                                    "start": 127,
                                    "end": 130
                                },
                                "flags": 32,
                                "start": 112,
                                "end": 130
                            },
                            "flags": 32,
                            "start": 108,
                            "end": 130
                        },
                        {
                            "kind": 317,
                            "flags": 96,
                            "start": 130,
                            "end": 131
                        },
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticToken": {
                                "kind": 8388716,
                                "flags": 64,
                                "start": 131,
                                "end": 140
                            },
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "f",
                                "rawText": "f",
                                "flags": 96,
                                "start": 140,
                                "end": 142
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": {
                                "kind": 177,
                                "asyncKeyword": null,
                                "functionKeyword": {
                                    "kind": 37822554,
                                    "flags": 64,
                                    "start": 144,
                                    "end": 153
                                },
                                "asteriskToken": null,
                                "name": null,
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 153,
                                    "end": 153
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 166,
                                        "end": 166
                                    },
                                    "flags": 32,
                                    "start": 164,
                                    "end": 167
                                },
                                "returnType": null,
                                "flags": 32,
                                "start": 144,
                                "end": 167
                            },
                            "flags": 32,
                            "start": 140,
                            "end": 167
                        },
                        {
                            "kind": 317,
                            "flags": 96,
                            "start": 167,
                            "end": 168
                        },
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticToken": {
                                "kind": 8388716,
                                "flags": 64,
                                "start": 168,
                                "end": 177
                            },
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "f",
                                "rawText": "f",
                                "flags": 96,
                                "start": 177,
                                "end": 179
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": {
                                "kind": 177,
                                "asyncKeyword": null,
                                "functionKeyword": {
                                    "kind": 37822554,
                                    "flags": 64,
                                    "start": 181,
                                    "end": 190
                                },
                                "asteriskToken": null,
                                "name": {
                                    "kind": 134299649,
                                    "text": "f",
                                    "rawText": "f",
                                    "flags": 96,
                                    "start": 190,
                                    "end": 192
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 192,
                                    "end": 192
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 205,
                                        "end": 205
                                    },
                                    "flags": 32,
                                    "start": 203,
                                    "end": 206
                                },
                                "returnType": null,
                                "flags": 32,
                                "start": 181,
                                "end": 206
                            },
                            "flags": 32,
                            "start": 177,
                            "end": 206
                        },
                        {
                            "kind": 317,
                            "flags": 96,
                            "start": 206,
                            "end": 207
                        }
                    ],
                    "flags": 32,
                    "start": 11,
                    "end": 207
                },
                "flags": 9,
                "start": 32,
                "end": 209
            },
            "flags": 16,
            "start": 0,
            "end": 209
        }
    ],
    "isModule": false,
    "source": "class Foo {\n  f(/* ... */) {}\n  f() /* ... */ {}\n  f = (/* ... */) => {};\n  static f(/* ... */) {};\n  static f = (/* ... */) => {};\n  static f = function(/* ... */) {};\n  static f = function f(/* ... */) {};\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 209
}
```

### Printed

```javascript

class Foo {
  f() {}
  f() /* ... */ {}
  f = () =>  {};

  static static f() {}

  static f = () =>  {};

  static f = function () {};

  static f = function f() {};

}
```

### Diagnostics

```javascript
✔ No errors
```

