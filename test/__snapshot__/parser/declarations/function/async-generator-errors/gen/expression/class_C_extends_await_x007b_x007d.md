# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/declarations/function/async-generator-errors/autogen.md
- Path: kataw8/test\__snapshot__\parser\declarations\function\async-generator-errors\gen\expression
> :: test: expression
> :: case: class C extends await { }
## Input

`````js
({ async * gen () {class C extends await { }} })
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
                                                    "kind": 178,
                                                    "declareKeyword": null,
                                                    "decorators": null,
                                                    "classKeyword": {
                                                        "kind": 37822544,
                                                        "flags": 80,
                                                        "start": 19,
                                                        "end": 24
                                                    },
                                                    "name": {
                                                        "kind": 134299649,
                                                        "text": "C",
                                                        "rawText": "C",
                                                        "flags": 96,
                                                        "start": 24,
                                                        "end": 26
                                                    },
                                                    "typeParameters": null,
                                                    "tail": {
                                                        "kind": 277,
                                                        "classHeritage": {
                                                            "kind": 279,
                                                            "extendsKeyword": {
                                                                "kind": 4194391,
                                                                "flags": 80,
                                                                "start": 26,
                                                                "end": 34
                                                            },
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "await",
                                                                "rawText": "await",
                                                                "flags": 96,
                                                                "start": 34,
                                                                "end": 40
                                                            },
                                                            "typeParameter": null,
                                                            "flags": 16,
                                                            "start": 34,
                                                            "end": 40
                                                        },
                                                        "body": {
                                                            "kind": 262,
                                                            "elements": [],
                                                            "flags": 32,
                                                            "start": 42,
                                                            "end": 42
                                                        },
                                                        "flags": 26,
                                                        "start": 32,
                                                        "end": 44
                                                    },
                                                    "flags": 16,
                                                    "start": 19,
                                                    "end": 44
                                                }
                                            ],
                                            "flags": 32,
                                            "start": 19,
                                            "end": 44
                                        },
                                        "flags": 32,
                                        "start": 17,
                                        "end": 45
                                    },
                                    "flags": 416,
                                    "start": 14,
                                    "end": 45
                                },
                                "flags": 32,
                                "start": 2,
                                "end": 45
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 2,
                        "end": 45
                    },
                    "flags": 48,
                    "start": 1,
                    "end": 47
                },
                "flags": 32,
                "start": 0,
                "end": 48
            },
            "flags": 16,
            "start": 0,
            "end": 48
        }
    ],
    "isModule": false,
    "source": "({ async * gen () {class C extends await { }} })",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 48
}
```

### Printed

```javascript

({ * async gen() {
    class C  {}
  } });
```

### Diagnostics

```javascript
✔ No errors
```

