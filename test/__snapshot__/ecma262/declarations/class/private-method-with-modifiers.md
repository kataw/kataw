# Kataw parser test case

## Input

`````js
class Foo {
	*#g() {}
	async #a() {}
	async *#ag() {}
	static *#sg() {}
	static async #sa() {}
	static async *#sag() {}
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
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "asteriskToken": {
                                "kind": 67143222,
                                "flags": 65,
                                "transformFlags": 0,
                                "start": 11,
                                "end": 14
                            },
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 67191035,
                                    "text": "#g",
                                    "rawText": "#g",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 14,
                                    "end": 16
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 17,
                                    "end": 18
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
                                        "start": 20,
                                        "end": 20
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 18,
                                    "end": 21
                                },
                                "flags": 0,
                                "transformFlags": 0,
                                "start": 16,
                                "end": 21
                            },
                            "flags": 0,
                            "transformFlags": 0,
                            "start": 11,
                            "end": 21
                        },
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "staticKeyword": null,
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 65,
                                "transformFlags": 0,
                                "start": 21,
                                "end": 28
                            },
                            "setKeyword": null,
                            "getKeyword": null,
                            "asteriskToken": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 67191035,
                                    "text": "#a",
                                    "rawText": "#a",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 28,
                                    "end": 31
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "transformFlags": 0,
                                    "start": 32,
                                    "end": 33
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
                                        "start": 35,
                                        "end": 35
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 33,
                                    "end": 36
                                },
                                "flags": 256,
                                "transformFlags": 0,
                                "start": 31,
                                "end": 36
                            },
                            "flags": 256,
                            "transformFlags": 0,
                            "start": 21,
                            "end": 36
                        },
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "staticKeyword": null,
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 65,
                                "transformFlags": 0,
                                "start": 36,
                                "end": 43
                            },
                            "setKeyword": null,
                            "getKeyword": null,
                            "asteriskToken": {
                                "kind": 67143222,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 43,
                                "end": 45
                            },
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 67191035,
                                    "text": "#ag",
                                    "rawText": "#ag",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 45,
                                    "end": 48
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 384,
                                    "transformFlags": 0,
                                    "start": 49,
                                    "end": 50
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
                                        "start": 52,
                                        "end": 52
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 50,
                                    "end": 53
                                },
                                "flags": 384,
                                "transformFlags": 0,
                                "start": 48,
                                "end": 53
                            },
                            "flags": 384,
                            "transformFlags": 0,
                            "start": 36,
                            "end": 53
                        },
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "staticKeyword": {
                                "kind": 8388716,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 53,
                                "end": 61
                            },
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "asteriskToken": {
                                "kind": 67143222,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 61,
                                "end": 63
                            },
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 67191035,
                                    "text": "#sg",
                                    "rawText": "#sg",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 63,
                                    "end": 66
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 67,
                                    "end": 68
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
                                        "start": 70,
                                        "end": 70
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 68,
                                    "end": 71
                                },
                                "flags": 0,
                                "transformFlags": 0,
                                "start": 66,
                                "end": 71
                            },
                            "flags": 0,
                            "transformFlags": 0,
                            "start": 61,
                            "end": 71
                        },
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "staticKeyword": {
                                "kind": 8388716,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 71,
                                "end": 79
                            },
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 79,
                                "end": 85
                            },
                            "setKeyword": null,
                            "getKeyword": null,
                            "asteriskToken": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 67191035,
                                    "text": "#sa",
                                    "rawText": "#sa",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 85,
                                    "end": 89
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "transformFlags": 0,
                                    "start": 90,
                                    "end": 91
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
                                        "start": 93,
                                        "end": 93
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 91,
                                    "end": 94
                                },
                                "flags": 256,
                                "transformFlags": 0,
                                "start": 89,
                                "end": 94
                            },
                            "flags": 256,
                            "transformFlags": 0,
                            "start": 79,
                            "end": 94
                        },
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "staticKeyword": {
                                "kind": 8388716,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 94,
                                "end": 102
                            },
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 102,
                                "end": 108
                            },
                            "setKeyword": null,
                            "getKeyword": null,
                            "asteriskToken": {
                                "kind": 67143222,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 108,
                                "end": 110
                            },
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 67191035,
                                    "text": "#sag",
                                    "rawText": "#sag",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 110,
                                    "end": 114
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 384,
                                    "transformFlags": 0,
                                    "start": 115,
                                    "end": 116
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
                                        "start": 118,
                                        "end": 118
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 116,
                                    "end": 119
                                },
                                "flags": 384,
                                "transformFlags": 0,
                                "start": 114,
                                "end": 119
                            },
                            "flags": 384,
                            "transformFlags": 0,
                            "start": 102,
                            "end": 119
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 11,
                    "end": 119
                },
                "flags": 9,
                "transformFlags": 0,
                "start": 32,
                "end": 121
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 121
        }
    ],
    "isModule": false,
    "source": "class Foo {\n\t*#g() {}\n\tasync #a() {}\n\tasync *#ag() {}\n\tstatic *#sg() {}\n\tstatic async #sa() {}\n\tstatic async *#sag() {}\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 121
}
```

### Printed

```javascript
class Foo {
  *#g() {}
  async #a() {}
  async *#ag() {}
  static *#sg() {}
  static async #sa() {}
  static async *#sag() {}
}
```

### Diagnostics

```javascript
✔ No errors
```

