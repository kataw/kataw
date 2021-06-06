# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/declarations/function/async-generator/autogen.md
- Path: kataw8/test\__snapshot__\parser\declarations\function\async-generator\gen\expression
> :: test: expression
> :: case: x = class extends (null, yield) { }
## Input

`````js
({ async * gen () {x = class extends (null, yield) { }} })
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
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 257,
                                "asyncKeyword": {
                                    "kind": 82031,
                                    "flags": 64,
                                    "start": 2,
                                    "end": 8
                                },
                                "generatorToken": {
                                    "kind": 67143222,
                                    "flags": 64,
                                    "start": 8,
                                    "end": 10
                                },
                                "getKeyword": null,
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "gen",
                                        "rawText": "gen",
                                        "flags": 96,
                                        "start": 10,
                                        "end": 14
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 416,
                                        "start": 16,
                                        "end": 17
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
                                                        "kind": 125,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 96,
                                                            "start": 19,
                                                            "end": 20
                                                        },
                                                        "operatorToken": {
                                                            "kind": 4125,
                                                            "flags": 64,
                                                            "start": 20,
                                                            "end": 22
                                                        },
                                                        "right": {
                                                            "kind": 189,
                                                            "decorators": null,
                                                            "classKeyword": {
                                                                "kind": 37822544,
                                                                "flags": 64,
                                                                "start": 22,
                                                                "end": 28
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
                                                                        "start": 28,
                                                                        "end": 36
                                                                    },
                                                                    "expression": {
                                                                        "kind": 121,
                                                                        "expression": {
                                                                            "kind": 132,
                                                                            "expressions": [
                                                                                {
                                                                                    "kind": 138477575,
                                                                                    "flags": 96,
                                                                                    "start": 38,
                                                                                    "end": 42
                                                                                },
                                                                                {
                                                                                    "kind": 229,
                                                                                    "yieldKeyword": {
                                                                                        "kind": 8454253,
                                                                                        "flags": 64,
                                                                                        "start": 43,
                                                                                        "end": 49
                                                                                    },
                                                                                    "delegate": false,
                                                                                    "asteriskToken": null,
                                                                                    "expression": null,
                                                                                    "flags": 32,
                                                                                    "start": 43,
                                                                                    "end": 49
                                                                                }
                                                                            ],
                                                                            "flags": 32,
                                                                            "start": 36,
                                                                            "end": 49
                                                                        },
                                                                        "flags": 32,
                                                                        "start": 36,
                                                                        "end": 50
                                                                    },
                                                                    "typeParameter": null,
                                                                    "flags": 16,
                                                                    "start": 36,
                                                                    "end": 50
                                                                },
                                                                "body": {
                                                                    "kind": 262,
                                                                    "elements": [],
                                                                    "flags": 32,
                                                                    "start": 52,
                                                                    "end": 52
                                                                },
                                                                "flags": 28,
                                                                "start": 32,
                                                                "end": 54
                                                            },
                                                            "flags": 32,
                                                            "start": 22,
                                                            "end": 54
                                                        },
                                                        "flags": 32,
                                                        "start": 19,
                                                        "end": 54
                                                    },
                                                    "flags": 16,
                                                    "start": 19,
                                                    "end": 54
                                                }
                                            ],
                                            "flags": 32,
                                            "start": 19,
                                            "end": 54
                                        },
                                        "flags": 32,
                                        "start": 17,
                                        "end": 55
                                    },
                                    "flags": 416,
                                    "start": 14,
                                    "end": 55
                                },
                                "flags": 32,
                                "start": 2,
                                "end": 55
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 2,
                        "end": 55
                    },
                    "flags": 48,
                    "start": 1,
                    "end": 57
                },
                "flags": 32,
                "start": 0,
                "end": 58
            },
            "flags": 16,
            "start": 0,
            "end": 58
        }
    ],
    "isModule": false,
    "source": "({ async * gen () {x = class extends (null, yield) { }} })",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 58
}
```

### Printed

```javascript

({ * async gen() {
    x = class   {};
  } });
```

### Diagnostics

```javascript
✔ No errors
```

