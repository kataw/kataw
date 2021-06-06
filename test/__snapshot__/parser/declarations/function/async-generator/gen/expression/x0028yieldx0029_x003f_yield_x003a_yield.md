# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/declarations/function/async-generator/autogen.md
- Path: kataw8/test\__snapshot__\parser\declarations\function\async-generator\gen\expression
> :: test: expression
> :: case: (yield)
>          ? yield : yield
## Input

`````js
({ async * gen () {(yield)
? yield : yield} })
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
                                                        "kind": 197,
                                                        "shortCircuit": {
                                                            "kind": 121,
                                                            "expression": {
                                                                "kind": 229,
                                                                "yieldKeyword": {
                                                                    "kind": 8454253,
                                                                    "flags": 64,
                                                                    "start": 20,
                                                                    "end": 25
                                                                },
                                                                "delegate": false,
                                                                "asteriskToken": null,
                                                                "expression": null,
                                                                "flags": 32,
                                                                "start": 20,
                                                                "end": 25
                                                            },
                                                            "flags": 32,
                                                            "start": 19,
                                                            "end": 26
                                                        },
                                                        "questionToken": {
                                                            "kind": 134217750,
                                                            "flags": 65,
                                                            "start": 26,
                                                            "end": 28
                                                        },
                                                        "consequent": {
                                                            "kind": 229,
                                                            "yieldKeyword": {
                                                                "kind": 8454253,
                                                                "flags": 64,
                                                                "start": 28,
                                                                "end": 34
                                                            },
                                                            "delegate": false,
                                                            "asteriskToken": null,
                                                            "expression": null,
                                                            "flags": 32,
                                                            "start": 28,
                                                            "end": 34
                                                        },
                                                        "colonToken": {
                                                            "kind": 21,
                                                            "flags": 64,
                                                            "start": 34,
                                                            "end": 36
                                                        },
                                                        "alternate": {
                                                            "kind": 229,
                                                            "yieldKeyword": {
                                                                "kind": 8454253,
                                                                "flags": 64,
                                                                "start": 36,
                                                                "end": 42
                                                            },
                                                            "delegate": false,
                                                            "asteriskToken": null,
                                                            "expression": null,
                                                            "flags": 32,
                                                            "start": 36,
                                                            "end": 42
                                                        },
                                                        "flags": 32,
                                                        "start": 19,
                                                        "end": 42
                                                    },
                                                    "flags": 16,
                                                    "start": 19,
                                                    "end": 42
                                                }
                                            ],
                                            "flags": 32,
                                            "start": 19,
                                            "end": 42
                                        },
                                        "flags": 32,
                                        "start": 17,
                                        "end": 43
                                    },
                                    "flags": 416,
                                    "start": 14,
                                    "end": 43
                                },
                                "flags": 32,
                                "start": 2,
                                "end": 43
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 2,
                        "end": 43
                    },
                    "flags": 48,
                    "start": 1,
                    "end": 45
                },
                "flags": 32,
                "start": 0,
                "end": 46
            },
            "flags": 16,
            "start": 0,
            "end": 46
        }
    ],
    "isModule": false,
    "source": "({ async * gen () {(yield)\n? yield : yield} })",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 46
}
```

### Printed

```javascript

({ * async gen() {
    ( yield) ?  yield :  yield;
  } });
```

### Diagnostics

```javascript
✔ No errors
```

