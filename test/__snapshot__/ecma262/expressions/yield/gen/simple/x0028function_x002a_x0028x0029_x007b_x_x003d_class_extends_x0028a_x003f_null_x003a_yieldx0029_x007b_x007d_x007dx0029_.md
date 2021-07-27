# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/yield/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/yield/gen/simple
> :: test: simple
> :: case: (function * () { x = class extends (a ? null : yield) { } });
## Options

`````js
{}
`````
## Input

`````js
(function * () { x = class extends (a ? null : yield) { } });
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 177,
                    "asyncKeyword": null,
                    "functionKeyword": {
                        "kind": 37822554,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 9
                    },
                    "asteriskToken": {
                        "kind": 201360950,
                        "flags": 64,
                        "transformFlags": 32,
                        "start": 9,
                        "end": 11
                    },
                    "name": null,
                    "typeParameters": null,
                    "formalParameterList": {
                        "kind": 214,
                        "formalParameters": [],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 13,
                        "end": 13
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
                                        "kind": 125,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 16,
                                            "end": 18
                                        },
                                        "operatorToken": {
                                            "kind": 4125,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 18,
                                            "end": 20
                                        },
                                        "right": {
                                            "kind": 189,
                                            "decorators": null,
                                            "classKeyword": {
                                                "kind": 37822544,
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 20,
                                                "end": 26
                                            },
                                            "name": null,
                                            "typeParameters": null,
                                            "tail": {
                                                "kind": 277,
                                                "classHeritage": {
                                                    "kind": 279,
                                                    "extendsKeyword": {
                                                        "kind": 4194391,
                                                        "flags": 80,
                                                        "transformFlags": 0,
                                                        "start": 26,
                                                        "end": 34
                                                    },
                                                    "expression": {
                                                        "kind": 121,
                                                        "expression": {
                                                            "kind": 197,
                                                            "shortCircuit": {
                                                                "kind": 134299649,
                                                                "text": "a",
                                                                "rawText": "a",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 36,
                                                                "end": 37
                                                            },
                                                            "questionToken": {
                                                                "kind": 134217750,
                                                                "flags": 64,
                                                                "transformFlags": 0,
                                                                "start": 37,
                                                                "end": 39
                                                            },
                                                            "consequent": {
                                                                "kind": 138477575,
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 39,
                                                                "end": 44
                                                            },
                                                            "colonToken": {
                                                                "kind": 21,
                                                                "flags": 64,
                                                                "transformFlags": 0,
                                                                "start": 44,
                                                                "end": 46
                                                            },
                                                            "alternate": {
                                                                "kind": 229,
                                                                "yieldKeyword": {
                                                                    "kind": 8454253,
                                                                    "flags": 64,
                                                                    "transformFlags": 0,
                                                                    "start": 46,
                                                                    "end": 52
                                                                },
                                                                "delegate": false,
                                                                "asteriskToken": null,
                                                                "expression": null,
                                                                "flags": 32,
                                                                "transformFlags": 4096,
                                                                "start": 46,
                                                                "end": 52
                                                            },
                                                            "flags": 96,
                                                            "transformFlags": 4096,
                                                            "start": 34,
                                                            "end": 52
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 34,
                                                        "end": 53
                                                    },
                                                    "typeParameter": null,
                                                    "flags": 16,
                                                    "transformFlags": 0,
                                                    "start": 34,
                                                    "end": 53
                                                },
                                                "body": {
                                                    "kind": 303,
                                                    "elements": [],
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 55,
                                                    "end": 55
                                                },
                                                "flags": 26,
                                                "transformFlags": 0,
                                                "start": 32,
                                                "end": 57
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 20,
                                            "end": 57
                                        },
                                        "flags": 0,
                                        "transformFlags": 128,
                                        "start": 16,
                                        "end": 57
                                    },
                                    "flags": 16,
                                    "transformFlags": 4096,
                                    "start": 16,
                                    "end": 57
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 16,
                            "end": 57
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 14,
                        "end": 59
                    },
                    "returnType": null,
                    "flags": 288,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 59
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 0,
                "end": 60
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 61
        }
    ],
    "isModule": false,
    "source": "(function * () { x = class extends (a ? null : yield) { } });",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 61
}
```

### Printed

```javascript
(function *() {
    x = class extends (a ? null : yield ) {};
  });
```

### Diagnostics

```javascript
✔ No errors
```

