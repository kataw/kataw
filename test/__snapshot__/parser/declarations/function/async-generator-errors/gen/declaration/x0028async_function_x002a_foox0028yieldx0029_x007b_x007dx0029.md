# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/declarations/function/async-generator-errors/autogen.md
- Path: kataw8/test\__snapshot__\parser\declarations\function\async-generator-errors\gen\declaration
> :: test: declaration
> :: case: (async function * foo(yield) { })
## Input

`````js
async function * gen() {(async function * foo(yield) { })}

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
                "flags": 64,
                "start": 0,
                "end": 5
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 5,
                "end": 14
            },
            "generatorToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 14,
                "end": 16
            },
            "name": {
                "kind": 134299649,
                "text": "gen",
                "rawText": "gen",
                "flags": 96,
                "start": 16,
                "end": 20
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 20,
                "end": 22
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
                                "kind": 121,
                                "expression": {
                                    "kind": 177,
                                    "asyncKeyword": {
                                        "kind": 82031,
                                        "flags": 64,
                                        "start": 25,
                                        "end": 30
                                    },
                                    "functionKeyword": {
                                        "kind": 37822554,
                                        "flags": 64,
                                        "start": 30,
                                        "end": 39
                                    },
                                    "generatorToken": {
                                        "kind": 67143222,
                                        "flags": 64,
                                        "start": 39,
                                        "end": 41
                                    },
                                    "name": {
                                        "kind": 134299649,
                                        "text": "foo",
                                        "rawText": "foo",
                                        "flags": 96,
                                        "start": 41,
                                        "end": 45
                                    },
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [
                                            {
                                                "kind": 134299649,
                                                "text": "yield",
                                                "rawText": "yield",
                                                "flags": 96,
                                                "start": 46,
                                                "end": 51
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 45,
                                        "end": 52
                                    },
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "start": 54,
                                            "end": 54
                                        },
                                        "flags": 32,
                                        "start": 52,
                                        "end": 56
                                    },
                                    "typeParameters": null,
                                    "returnType": null,
                                    "flags": 416,
                                    "start": 25,
                                    "end": 56
                                },
                                "flags": 32,
                                "start": 24,
                                "end": 57
                            },
                            "flags": 16,
                            "start": 24,
                            "end": 57
                        }
                    ],
                    "flags": 32,
                    "start": 24,
                    "end": 57
                },
                "flags": 32,
                "start": 22,
                "end": 58
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 400,
            "start": 0,
            "end": 58
        }
    ],
    "isModule": false,
    "source": "async function * gen() {(async function * foo(yield) { })}\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 59
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ `yield` expression cannot be used in function parameters - start: 46, end: 51

```

