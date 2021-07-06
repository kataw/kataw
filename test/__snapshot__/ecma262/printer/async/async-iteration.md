# Kataw parser test case

## Input

`````js

async function * a() {
    yield* b();
}

class X {
    async * b() {
        yield* a();
    }
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
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 65,
                "transformFlags": 0,
                "start": 0,
                "end": 6
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "transformFlags": 0,
                "start": 6,
                "end": 15
            },
            "asteriskToken": {
                "kind": 67143222,
                "flags": 64,
                "transformFlags": 32,
                "start": 15,
                "end": 17
            },
            "name": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 96,
                "transformFlags": 0,
                "start": 17,
                "end": 19
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 20,
                "end": 20
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 229,
                                "yieldKeyword": {
                                    "kind": 8454253,
                                    "flags": 65,
                                    "transformFlags": 0,
                                    "start": 23,
                                    "end": 33
                                },
                                "delegate": true,
                                "asteriskToken": {
                                    "kind": 67143222,
                                    "flags": 64,
                                    "transformFlags": 32,
                                    "start": 33,
                                    "end": 34
                                },
                                "expression": {
                                    "kind": 131,
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 34,
                                        "end": 36
                                    },
                                    "argumentList": {
                                        "kind": 256,
                                        "elements": [],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 37,
                                        "end": 37
                                    },
                                    "flags": 268435488,
                                    "transformFlags": 1,
                                    "start": 34,
                                    "end": 38
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 23,
                                "end": 38
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 23,
                            "end": 39
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 23,
                    "end": 39
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 21,
                "end": 41
            },
            "returnType": null,
            "flags": 400,
            "transformFlags": 0,
            "start": 0,
            "end": 41
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "transformFlags": 0,
                "start": 41,
                "end": 48
            },
            "name": {
                "kind": 134299649,
                "text": "X",
                "rawText": "X",
                "flags": 96,
                "transformFlags": 0,
                "start": 48,
                "end": 50
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
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 65,
                                "transformFlags": 0,
                                "start": 52,
                                "end": 62
                            },
                            "setKeyword": null,
                            "getKeyword": null,
                            "asteriskToken": {
                                "kind": 67143222,
                                "flags": 64,
                                "transformFlags": 32,
                                "start": 62,
                                "end": 64
                            },
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 64,
                                    "end": 66
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 384,
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
                                        "statements": [
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 229,
                                                    "yieldKeyword": {
                                                        "kind": 8454253,
                                                        "flags": 65,
                                                        "transformFlags": 0,
                                                        "start": 70,
                                                        "end": 84
                                                    },
                                                    "delegate": true,
                                                    "asteriskToken": {
                                                        "kind": 67143222,
                                                        "flags": 64,
                                                        "transformFlags": 32,
                                                        "start": 84,
                                                        "end": 85
                                                    },
                                                    "expression": {
                                                        "kind": 131,
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 85,
                                                            "end": 87
                                                        },
                                                        "argumentList": {
                                                            "kind": 256,
                                                            "elements": [],
                                                            "trailingComma": false,
                                                            "flags": 32,
                                                            "transformFlags": 0,
                                                            "start": 88,
                                                            "end": 88
                                                        },
                                                        "flags": 268435488,
                                                        "transformFlags": 1,
                                                        "start": 85,
                                                        "end": 89
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 70,
                                                    "end": 89
                                                },
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 70,
                                                "end": 90
                                            }
                                        ],
                                        "flags": 33,
                                        "transformFlags": 0,
                                        "start": 70,
                                        "end": 90
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 68,
                                    "end": 96
                                },
                                "flags": 384,
                                "transformFlags": 0,
                                "start": 66,
                                "end": 96
                            },
                            "flags": 384,
                            "transformFlags": 0,
                            "start": 52,
                            "end": 96
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 52,
                    "end": 96
                },
                "flags": 50,
                "transformFlags": 0,
                "start": 32,
                "end": 98
            },
            "flags": 17,
            "transformFlags": 0,
            "start": 41,
            "end": 98
        }
    ],
    "isModule": false,
    "source": "\nasync function * a() {\n    yield* b();\n}\n\nclass X {\n    async * b() {\n        yield* a();\n    }\n}\n",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 99
}
```

### Printed

```javascript
async function * a() {
  yield * b();
}
class X {
  async * b() {
    yield * a();
  }
}

```

### Diagnostics

```javascript
✔ No errors
```

