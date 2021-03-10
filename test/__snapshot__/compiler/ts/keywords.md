# Kataw parser test case

## Input

`````js
class C {
  private *a() {}
  public *b() {}
  static *c() {}
  abstract *d() {}
  readonly *e() {}
  declare *f() {}
  protected *g() {}
}

class D {
  declare<T>() {}
  readonly<T>() {}
  abstract<T>() {}
  static<T>() {}
  private<T>() {}
  public<T>() {}
  protected<T>() {}
}

class E {
  public
  private() {}
}

class Foo {
  constructor(private, public, static) {
  }
}

class F {
    constructor(public []) {}
}
class G {
    constructor(public {}) {}
}
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "class C {\n  private *a() {}\n  public *b() {}\n  static *c() {}\n  abstract *d() {}\n  readonly *e() {}\n  declare *f() {}\n  protected *g() {}\n}\n\nclass D {\n  declare<T>() {}\n  readonly<T>() {}\n  abstract<T>() {}\n  static<T>() {}\n  private<T>() {}\n  public<T>() {}\n  protected<T>() {}\n}\n\nclass E {\n  public\n  private() {}\n}\n\nclass Foo {\n  constructor(private, public, static) {\n  }\n}\n\nclass F {\n    constructor(public []) {}\n}\nclass G {\n    constructor(public {}) {}\n}",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 48,
                "name": {
                    "kind": 131102,
                    "text": "C",
                    "rawText": "C",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1025,
                    "start": 5,
                    "end": 7
                },
                "typeParameters": null,
                "classHeritage": null,
                "implementClauses": null,
                "members": {
                    "kind": 50,
                    "elements": [
                        {
                            "kind": 49,
                            "isStatic": false,
                            "isAbstract": false,
                            "isReadOnly": false,
                            "isOptional": false,
                            "method": {
                                "kind": 17303650,
                                "name": {
                                    "kind": 196711,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 21,
                                    "end": 22
                                },
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 23,
                                    "end": 24
                                },
                                "isSetter": false,
                                "isGetter": false,
                                "contents": {
                                    "kind": 91,
                                    "functionStatementList": {
                                        "kind": 94,
                                        "statements": [],
                                        "multiline": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 26,
                                        "end": 26
                                    },
                                    "flags": 16384,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 24,
                                    "end": 27
                                },
                                "decorators": null,
                                "type": null,
                                "accessModifier": {
                                    "kind": 4194485,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 9,
                                    "end": 19
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 22,
                                "end": 27
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 9,
                            "end": 27
                        },
                        {
                            "kind": 49,
                            "isStatic": false,
                            "isAbstract": false,
                            "isReadOnly": false,
                            "isOptional": false,
                            "method": {
                                "kind": 17303650,
                                "name": {
                                    "kind": 196711,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 38,
                                    "end": 39
                                },
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 40,
                                    "end": 41
                                },
                                "isSetter": false,
                                "isGetter": false,
                                "contents": {
                                    "kind": 91,
                                    "functionStatementList": {
                                        "kind": 94,
                                        "statements": [],
                                        "multiline": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 43,
                                        "end": 43
                                    },
                                    "flags": 16384,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 41,
                                    "end": 44
                                },
                                "decorators": null,
                                "type": null,
                                "accessModifier": {
                                    "kind": 4194494,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 27,
                                    "end": 36
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 39,
                                "end": 44
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 27,
                            "end": 44
                        },
                        {
                            "kind": 49,
                            "isStatic": true,
                            "isAbstract": false,
                            "isReadOnly": false,
                            "isOptional": false,
                            "method": {
                                "kind": 17303650,
                                "name": {
                                    "kind": 196711,
                                    "text": "c",
                                    "rawText": "c",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 55,
                                    "end": 56
                                },
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 57,
                                    "end": 58
                                },
                                "isSetter": false,
                                "isGetter": false,
                                "contents": {
                                    "kind": 91,
                                    "functionStatementList": {
                                        "kind": 94,
                                        "statements": [],
                                        "multiline": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 60,
                                        "end": 60
                                    },
                                    "flags": 16384,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 58,
                                    "end": 61
                                },
                                "decorators": null,
                                "type": null,
                                "accessModifier": null,
                                "typeParameters": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 56,
                                "end": 61
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 44,
                            "end": 61
                        },
                        {
                            "kind": 49,
                            "isStatic": false,
                            "isAbstract": true,
                            "isReadOnly": false,
                            "isOptional": false,
                            "method": {
                                "kind": 17303650,
                                "name": {
                                    "kind": 196711,
                                    "text": "d",
                                    "rawText": "d",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 74,
                                    "end": 75
                                },
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 76,
                                    "end": 77
                                },
                                "isSetter": false,
                                "isGetter": false,
                                "contents": {
                                    "kind": 91,
                                    "functionStatementList": {
                                        "kind": 94,
                                        "statements": [],
                                        "multiline": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 79,
                                        "end": 79
                                    },
                                    "flags": 16384,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 77,
                                    "end": 80
                                },
                                "decorators": null,
                                "type": null,
                                "accessModifier": null,
                                "typeParameters": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 75,
                                "end": 80
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 61,
                            "end": 80
                        },
                        {
                            "kind": 49,
                            "isStatic": false,
                            "isAbstract": false,
                            "isReadOnly": true,
                            "isOptional": false,
                            "method": {
                                "kind": 17303650,
                                "name": {
                                    "kind": 196711,
                                    "text": "e",
                                    "rawText": "e",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 93,
                                    "end": 94
                                },
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 95,
                                    "end": 96
                                },
                                "isSetter": false,
                                "isGetter": false,
                                "contents": {
                                    "kind": 91,
                                    "functionStatementList": {
                                        "kind": 94,
                                        "statements": [],
                                        "multiline": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 98,
                                        "end": 98
                                    },
                                    "flags": 16384,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 96,
                                    "end": 99
                                },
                                "decorators": null,
                                "type": null,
                                "accessModifier": null,
                                "typeParameters": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 94,
                                "end": 99
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 80,
                            "end": 99
                        },
                        {
                            "kind": 84,
                            "key": {
                                "kind": 196712,
                                "text": "",
                                "rawText": "",
                                "flags": 2,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 109,
                                "end": 109
                            },
                            "isInKeyword": false,
                            "expression": null,
                            "isAbstract": false,
                            "isReadOnly": false,
                            "isOptional": false,
                            "exclamation": false,
                            "type": null,
                            "initializer": null,
                            "decorators": null,
                            "accessModifier": null,
                            "isStatic": false,
                            "flags": 67108866,
                            "intersects": false,
                            "transformFlags": 524352,
                            "start": 99,
                            "end": 111
                        },
                        {
                            "kind": 49,
                            "isStatic": false,
                            "isAbstract": false,
                            "isReadOnly": false,
                            "isOptional": false,
                            "method": {
                                "kind": 16844946,
                                "name": {
                                    "kind": 196711,
                                    "text": "f",
                                    "rawText": "f",
                                    "flags": 2,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 111,
                                    "end": 112
                                },
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 113,
                                    "end": 114
                                },
                                "isSetter": false,
                                "isGetter": false,
                                "contents": {
                                    "kind": 91,
                                    "functionStatementList": {
                                        "kind": 94,
                                        "statements": [],
                                        "multiline": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 116,
                                        "end": 116
                                    },
                                    "flags": 16384,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 114,
                                    "end": 117
                                },
                                "decorators": null,
                                "type": null,
                                "accessModifier": null,
                                "typeParameters": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 112,
                                "end": 117
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 111,
                            "end": 117
                        },
                        {
                            "kind": 49,
                            "isStatic": false,
                            "isAbstract": false,
                            "isReadOnly": false,
                            "isOptional": false,
                            "method": {
                                "kind": 17303650,
                                "name": {
                                    "kind": 196711,
                                    "text": "g",
                                    "rawText": "g",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 131,
                                    "end": 132
                                },
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 133,
                                    "end": 134
                                },
                                "isSetter": false,
                                "isGetter": false,
                                "contents": {
                                    "kind": 91,
                                    "functionStatementList": {
                                        "kind": 94,
                                        "statements": [],
                                        "multiline": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 136,
                                        "end": 136
                                    },
                                    "flags": 16384,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 134,
                                    "end": 137
                                },
                                "decorators": null,
                                "type": null,
                                "accessModifier": {
                                    "kind": 4194493,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 117,
                                    "end": 129
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 132,
                                "end": 137
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 117,
                            "end": 137
                        }
                    ],
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 1,
                    "start": 9,
                    "end": 139
                },
                "decorators": null,
                "isAbstract": false,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 1,
                "start": 0,
                "end": 139
            },
            {
                "kind": 48,
                "name": {
                    "kind": 131102,
                    "text": "D",
                    "rawText": "D",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1025,
                    "start": 146,
                    "end": 148
                },
                "typeParameters": null,
                "classHeritage": null,
                "implementClauses": null,
                "members": {
                    "kind": 50,
                    "elements": [
                        {
                            "kind": 49,
                            "isStatic": false,
                            "isAbstract": false,
                            "isReadOnly": false,
                            "isOptional": false,
                            "method": {
                                "kind": 16844946,
                                "name": {
                                    "kind": 196711,
                                    "text": "declare",
                                    "rawText": "declare",
                                    "flags": 16384,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 150,
                                    "end": 160
                                },
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 164,
                                    "end": 165
                                },
                                "isSetter": false,
                                "isGetter": false,
                                "contents": {
                                    "kind": 91,
                                    "functionStatementList": {
                                        "kind": 94,
                                        "statements": [],
                                        "multiline": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 167,
                                        "end": 167
                                    },
                                    "flags": 16384,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 165,
                                    "end": 168
                                },
                                "decorators": null,
                                "type": null,
                                "accessModifier": null,
                                "typeParameters": {
                                    "kind": 8425,
                                    "typeParameterList": [
                                        {
                                            "kind": 8424,
                                            "name": {
                                                "kind": 196711,
                                                "text": "T",
                                                "rawText": "T",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 161,
                                                "end": 162
                                            },
                                            "constraint": null,
                                            "defaultType": null,
                                            "expression": null,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 161,
                                            "end": 162
                                        }
                                    ],
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 161,
                                    "end": 162
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 160,
                                "end": 168
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 150,
                            "end": 168
                        },
                        {
                            "kind": 49,
                            "isStatic": false,
                            "isAbstract": false,
                            "isReadOnly": false,
                            "isOptional": false,
                            "method": {
                                "kind": 16844946,
                                "name": {
                                    "kind": 196711,
                                    "text": "readonly",
                                    "rawText": "readonly",
                                    "flags": 16384,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 168,
                                    "end": 179
                                },
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 183,
                                    "end": 184
                                },
                                "isSetter": false,
                                "isGetter": false,
                                "contents": {
                                    "kind": 91,
                                    "functionStatementList": {
                                        "kind": 94,
                                        "statements": [],
                                        "multiline": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 186,
                                        "end": 186
                                    },
                                    "flags": 16384,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 184,
                                    "end": 187
                                },
                                "decorators": null,
                                "type": null,
                                "accessModifier": null,
                                "typeParameters": {
                                    "kind": 8425,
                                    "typeParameterList": [
                                        {
                                            "kind": 8424,
                                            "name": {
                                                "kind": 196711,
                                                "text": "T",
                                                "rawText": "T",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 180,
                                                "end": 181
                                            },
                                            "constraint": null,
                                            "defaultType": null,
                                            "expression": null,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 180,
                                            "end": 181
                                        }
                                    ],
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 180,
                                    "end": 181
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 179,
                                "end": 187
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 168,
                            "end": 187
                        },
                        {
                            "kind": 49,
                            "isStatic": false,
                            "isAbstract": false,
                            "isReadOnly": false,
                            "isOptional": false,
                            "method": {
                                "kind": 16844946,
                                "name": {
                                    "kind": 196711,
                                    "text": "abstract",
                                    "rawText": "abstract",
                                    "flags": 16384,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 187,
                                    "end": 198
                                },
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 202,
                                    "end": 203
                                },
                                "isSetter": false,
                                "isGetter": false,
                                "contents": {
                                    "kind": 91,
                                    "functionStatementList": {
                                        "kind": 94,
                                        "statements": [],
                                        "multiline": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 205,
                                        "end": 205
                                    },
                                    "flags": 16384,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 203,
                                    "end": 206
                                },
                                "decorators": null,
                                "type": null,
                                "accessModifier": null,
                                "typeParameters": {
                                    "kind": 8425,
                                    "typeParameterList": [
                                        {
                                            "kind": 8424,
                                            "name": {
                                                "kind": 196711,
                                                "text": "T",
                                                "rawText": "T",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 199,
                                                "end": 200
                                            },
                                            "constraint": null,
                                            "defaultType": null,
                                            "expression": null,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 199,
                                            "end": 200
                                        }
                                    ],
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 199,
                                    "end": 200
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 198,
                                "end": 206
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 187,
                            "end": 206
                        },
                        {
                            "kind": 49,
                            "isStatic": false,
                            "isAbstract": false,
                            "isReadOnly": false,
                            "isOptional": false,
                            "method": {
                                "kind": 16844946,
                                "name": {
                                    "kind": 196711,
                                    "text": "static",
                                    "rawText": "static",
                                    "flags": 16384,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 206,
                                    "end": 215
                                },
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 219,
                                    "end": 220
                                },
                                "isSetter": false,
                                "isGetter": false,
                                "contents": {
                                    "kind": 91,
                                    "functionStatementList": {
                                        "kind": 94,
                                        "statements": [],
                                        "multiline": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 222,
                                        "end": 222
                                    },
                                    "flags": 16384,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 220,
                                    "end": 223
                                },
                                "decorators": null,
                                "type": null,
                                "accessModifier": null,
                                "typeParameters": {
                                    "kind": 8425,
                                    "typeParameterList": [
                                        {
                                            "kind": 8424,
                                            "name": {
                                                "kind": 196711,
                                                "text": "T",
                                                "rawText": "T",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 216,
                                                "end": 217
                                            },
                                            "constraint": null,
                                            "defaultType": null,
                                            "expression": null,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 216,
                                            "end": 217
                                        }
                                    ],
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 216,
                                    "end": 217
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 215,
                                "end": 223
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 206,
                            "end": 223
                        },
                        {
                            "kind": 49,
                            "isStatic": false,
                            "isAbstract": false,
                            "isReadOnly": false,
                            "isOptional": false,
                            "method": {
                                "kind": 16844946,
                                "name": {
                                    "kind": 196711,
                                    "text": "private",
                                    "rawText": "private",
                                    "flags": 16384,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 223,
                                    "end": 233
                                },
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 237,
                                    "end": 238
                                },
                                "isSetter": false,
                                "isGetter": false,
                                "contents": {
                                    "kind": 91,
                                    "functionStatementList": {
                                        "kind": 94,
                                        "statements": [],
                                        "multiline": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 240,
                                        "end": 240
                                    },
                                    "flags": 16384,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 238,
                                    "end": 241
                                },
                                "decorators": null,
                                "type": null,
                                "accessModifier": null,
                                "typeParameters": {
                                    "kind": 8425,
                                    "typeParameterList": [
                                        {
                                            "kind": 8424,
                                            "name": {
                                                "kind": 196711,
                                                "text": "T",
                                                "rawText": "T",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 234,
                                                "end": 235
                                            },
                                            "constraint": null,
                                            "defaultType": null,
                                            "expression": null,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 234,
                                            "end": 235
                                        }
                                    ],
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 234,
                                    "end": 235
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 233,
                                "end": 241
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 223,
                            "end": 241
                        },
                        {
                            "kind": 49,
                            "isStatic": false,
                            "isAbstract": false,
                            "isReadOnly": false,
                            "isOptional": false,
                            "method": {
                                "kind": 16844946,
                                "name": {
                                    "kind": 196711,
                                    "text": "public",
                                    "rawText": "public",
                                    "flags": 16384,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 241,
                                    "end": 250
                                },
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 254,
                                    "end": 255
                                },
                                "isSetter": false,
                                "isGetter": false,
                                "contents": {
                                    "kind": 91,
                                    "functionStatementList": {
                                        "kind": 94,
                                        "statements": [],
                                        "multiline": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 257,
                                        "end": 257
                                    },
                                    "flags": 16384,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 255,
                                    "end": 258
                                },
                                "decorators": null,
                                "type": null,
                                "accessModifier": null,
                                "typeParameters": {
                                    "kind": 8425,
                                    "typeParameterList": [
                                        {
                                            "kind": 8424,
                                            "name": {
                                                "kind": 196711,
                                                "text": "T",
                                                "rawText": "T",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 251,
                                                "end": 252
                                            },
                                            "constraint": null,
                                            "defaultType": null,
                                            "expression": null,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 251,
                                            "end": 252
                                        }
                                    ],
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 251,
                                    "end": 252
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 250,
                                "end": 258
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 241,
                            "end": 258
                        },
                        {
                            "kind": 49,
                            "isStatic": false,
                            "isAbstract": false,
                            "isReadOnly": false,
                            "isOptional": false,
                            "method": {
                                "kind": 16844946,
                                "name": {
                                    "kind": 196711,
                                    "text": "protected",
                                    "rawText": "protected",
                                    "flags": 16384,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 258,
                                    "end": 270
                                },
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 274,
                                    "end": 275
                                },
                                "isSetter": false,
                                "isGetter": false,
                                "contents": {
                                    "kind": 91,
                                    "functionStatementList": {
                                        "kind": 94,
                                        "statements": [],
                                        "multiline": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 277,
                                        "end": 277
                                    },
                                    "flags": 16384,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 275,
                                    "end": 278
                                },
                                "decorators": null,
                                "type": null,
                                "accessModifier": null,
                                "typeParameters": {
                                    "kind": 8425,
                                    "typeParameterList": [
                                        {
                                            "kind": 8424,
                                            "name": {
                                                "kind": 196711,
                                                "text": "T",
                                                "rawText": "T",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 271,
                                                "end": 272
                                            },
                                            "constraint": null,
                                            "defaultType": null,
                                            "expression": null,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 271,
                                            "end": 272
                                        }
                                    ],
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 271,
                                    "end": 272
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 270,
                                "end": 278
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 258,
                            "end": 278
                        }
                    ],
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 1,
                    "start": 150,
                    "end": 280
                },
                "decorators": null,
                "isAbstract": false,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 1,
                "start": 139,
                "end": 280
            },
            {
                "kind": 48,
                "name": {
                    "kind": 131102,
                    "text": "E",
                    "rawText": "E",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1025,
                    "start": 287,
                    "end": 289
                },
                "typeParameters": null,
                "classHeritage": null,
                "implementClauses": null,
                "members": {
                    "kind": 50,
                    "elements": [
                        {
                            "kind": 84,
                            "key": {
                                "kind": 196711,
                                "text": "public",
                                "rawText": "public",
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 291,
                                "end": 300
                            },
                            "isInKeyword": false,
                            "expression": null,
                            "isAbstract": false,
                            "isReadOnly": false,
                            "isOptional": false,
                            "exclamation": false,
                            "type": null,
                            "initializer": null,
                            "decorators": null,
                            "accessModifier": null,
                            "isStatic": false,
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 524352,
                            "start": 291,
                            "end": 300
                        },
                        {
                            "kind": 49,
                            "isStatic": false,
                            "isAbstract": false,
                            "isReadOnly": false,
                            "isOptional": false,
                            "method": {
                                "kind": 16844946,
                                "name": {
                                    "kind": 196711,
                                    "text": "private",
                                    "rawText": "private",
                                    "flags": 16384,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 300,
                                    "end": 310
                                },
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 311,
                                    "end": 312
                                },
                                "isSetter": false,
                                "isGetter": false,
                                "contents": {
                                    "kind": 91,
                                    "functionStatementList": {
                                        "kind": 94,
                                        "statements": [],
                                        "multiline": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 314,
                                        "end": 314
                                    },
                                    "flags": 16384,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 312,
                                    "end": 315
                                },
                                "decorators": null,
                                "type": null,
                                "accessModifier": null,
                                "typeParameters": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 310,
                                "end": 315
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 300,
                            "end": 315
                        }
                    ],
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 1,
                    "start": 291,
                    "end": 317
                },
                "decorators": null,
                "isAbstract": false,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 1,
                "start": 280,
                "end": 317
            },
            {
                "kind": 48,
                "name": {
                    "kind": 131102,
                    "text": "Foo",
                    "rawText": "Foo",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1025,
                    "start": 324,
                    "end": 328
                },
                "typeParameters": null,
                "classHeritage": null,
                "implementClauses": null,
                "members": {
                    "kind": 50,
                    "elements": [
                        {
                            "kind": 49,
                            "isStatic": false,
                            "isAbstract": false,
                            "isReadOnly": false,
                            "isOptional": false,
                            "method": {
                                "kind": 16844946,
                                "name": {
                                    "kind": 196711,
                                    "text": "constructor",
                                    "rawText": "constructor",
                                    "flags": 16384,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 330,
                                    "end": 344
                                },
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [
                                        {
                                            "kind": 89,
                                            "ellipsis": false,
                                            "binding": {
                                                "kind": 131102,
                                                "text": "private",
                                                "rawText": "private",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 1025,
                                                "start": 345,
                                                "end": 352
                                            },
                                            "isOptional": false,
                                            "type": null,
                                            "initializer": null,
                                            "decorators": null,
                                            "accessModifier": null,
                                            "isReadOnly": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1,
                                            "start": 345,
                                            "end": 352
                                        },
                                        {
                                            "kind": 89,
                                            "ellipsis": false,
                                            "binding": {
                                                "kind": 131102,
                                                "text": "public",
                                                "rawText": "public",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 1025,
                                                "start": 353,
                                                "end": 360
                                            },
                                            "isOptional": false,
                                            "type": null,
                                            "initializer": null,
                                            "decorators": null,
                                            "accessModifier": null,
                                            "isReadOnly": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1,
                                            "start": 353,
                                            "end": 360
                                        },
                                        {
                                            "kind": 89,
                                            "ellipsis": false,
                                            "binding": {
                                                "kind": 131102,
                                                "text": "static",
                                                "rawText": "static",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 1025,
                                                "start": 361,
                                                "end": 368
                                            },
                                            "isOptional": false,
                                            "type": null,
                                            "initializer": null,
                                            "decorators": null,
                                            "accessModifier": null,
                                            "isReadOnly": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1,
                                            "start": 361,
                                            "end": 368
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 345,
                                    "end": 369
                                },
                                "isSetter": false,
                                "isGetter": false,
                                "contents": {
                                    "kind": 91,
                                    "functionStatementList": {
                                        "kind": 94,
                                        "statements": [],
                                        "multiline": true,
                                        "flags": 16384,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 371,
                                        "end": 371
                                    },
                                    "flags": 16384,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 369,
                                    "end": 375
                                },
                                "decorators": null,
                                "type": null,
                                "accessModifier": null,
                                "typeParameters": null,
                                "flags": 262144,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 344,
                                "end": 375
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 330,
                            "end": 375
                        }
                    ],
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 1,
                    "start": 330,
                    "end": 377
                },
                "decorators": null,
                "isAbstract": false,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 1,
                "start": 317,
                "end": 377
            },
            {
                "kind": 48,
                "name": {
                    "kind": 131102,
                    "text": "F",
                    "rawText": "F",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1025,
                    "start": 384,
                    "end": 386
                },
                "typeParameters": null,
                "classHeritage": null,
                "implementClauses": null,
                "members": {
                    "kind": 50,
                    "elements": [
                        {
                            "kind": 49,
                            "isStatic": false,
                            "isAbstract": false,
                            "isReadOnly": false,
                            "isOptional": false,
                            "method": {
                                "kind": 16844946,
                                "name": {
                                    "kind": 196711,
                                    "text": "constructor",
                                    "rawText": "constructor",
                                    "flags": 16384,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 388,
                                    "end": 404
                                },
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [
                                        {
                                            "kind": 89,
                                            "ellipsis": false,
                                            "binding": {
                                                "kind": 33554437,
                                                "elementList": {
                                                    "kind": 29,
                                                    "elements": [],
                                                    "trailingComma": false,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 1,
                                                    "start": 413,
                                                    "end": 413
                                                },
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 1025,
                                                "start": 411,
                                                "end": 414
                                            },
                                            "isOptional": false,
                                            "type": null,
                                            "initializer": null,
                                            "decorators": null,
                                            "accessModifier": {
                                                "kind": 4194494,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 405,
                                                "end": 411
                                            },
                                            "isReadOnly": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097153,
                                            "start": 405,
                                            "end": 414
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 405,
                                    "end": 415
                                },
                                "isSetter": false,
                                "isGetter": false,
                                "contents": {
                                    "kind": 91,
                                    "functionStatementList": {
                                        "kind": 94,
                                        "statements": [],
                                        "multiline": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 417,
                                        "end": 417
                                    },
                                    "flags": 16384,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 415,
                                    "end": 418
                                },
                                "decorators": null,
                                "type": null,
                                "accessModifier": null,
                                "typeParameters": null,
                                "flags": 262144,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 404,
                                "end": 418
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 388,
                            "end": 418
                        }
                    ],
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 1,
                    "start": 388,
                    "end": 420
                },
                "decorators": null,
                "isAbstract": false,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 1,
                "start": 377,
                "end": 420
            },
            {
                "kind": 48,
                "name": {
                    "kind": 131102,
                    "text": "G",
                    "rawText": "G",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1025,
                    "start": 426,
                    "end": 428
                },
                "typeParameters": null,
                "classHeritage": null,
                "implementClauses": null,
                "members": {
                    "kind": 50,
                    "elements": [
                        {
                            "kind": 49,
                            "isStatic": false,
                            "isAbstract": false,
                            "isReadOnly": false,
                            "isOptional": false,
                            "method": {
                                "kind": 16844946,
                                "name": {
                                    "kind": 196711,
                                    "text": "constructor",
                                    "rawText": "constructor",
                                    "flags": 16384,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 430,
                                    "end": 446
                                },
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [
                                        {
                                            "kind": 89,
                                            "ellipsis": false,
                                            "binding": {
                                                "kind": 33554598,
                                                "propertyList": {
                                                    "kind": 33,
                                                    "properties": [],
                                                    "multiline": false,
                                                    "trailingComma": false,
                                                    "transformFlags": 1025,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "start": 455,
                                                    "end": 455
                                                },
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 1025,
                                                "start": 453,
                                                "end": 456
                                            },
                                            "isOptional": false,
                                            "type": null,
                                            "initializer": null,
                                            "decorators": null,
                                            "accessModifier": {
                                                "kind": 4194494,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 447,
                                                "end": 453
                                            },
                                            "isReadOnly": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097153,
                                            "start": 447,
                                            "end": 456
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 447,
                                    "end": 457
                                },
                                "isSetter": false,
                                "isGetter": false,
                                "contents": {
                                    "kind": 91,
                                    "functionStatementList": {
                                        "kind": 94,
                                        "statements": [],
                                        "multiline": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 459,
                                        "end": 459
                                    },
                                    "flags": 16384,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 457,
                                    "end": 460
                                },
                                "decorators": null,
                                "type": null,
                                "accessModifier": null,
                                "typeParameters": null,
                                "flags": 262144,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 446,
                                "end": 460
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 430,
                            "end": 460
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1,
                    "start": 430,
                    "end": 462
                },
                "decorators": null,
                "isAbstract": false,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 1,
                "start": 420,
                "end": 462
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 462
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 462
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

