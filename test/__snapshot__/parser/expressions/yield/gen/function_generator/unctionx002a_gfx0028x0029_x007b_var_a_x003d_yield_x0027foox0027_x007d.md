# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-02
- From: kataw8/test\__snapshot__/parser/expressions/yield/autogen.md
- Path: kataw8/test\__snapshot__\parser\expressions\yield\gen\function_generator
> :: test: function generator
> :: case: unction* gf() { var a = yield 'foo'; }
## Input

`````js
function * gen() { function not_gen() { unction* gf() { var a = yield 'foo'; } }}
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
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 0,
                "end": 8
            },
            "generatorToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 8,
                "end": 10
            },
            "name": {
                "kind": 134299649,
                "text": "gen",
                "rawText": "gen",
                "flags": 96,
                "start": 10,
                "end": 14
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 14,
                "end": 16
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 176,
                            "declareKeyword": null,
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 64,
                                "start": 18,
                                "end": 27
                            },
                            "generatorToken": null,
                            "name": {
                                "kind": 134299649,
                                "text": "not_gen",
                                "rawText": "not_gen",
                                "flags": 96,
                                "start": 27,
                                "end": 35
                            },
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 35,
                                "end": 37
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
                                                "kind": 198,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "unction",
                                                    "rawText": "unction",
                                                    "flags": 96,
                                                    "start": 39,
                                                    "end": 47
                                                },
                                                "operatorToken": {
                                                    "kind": 67143222,
                                                    "flags": 64,
                                                    "start": 47,
                                                    "end": 48
                                                },
                                                "right": {
                                                    "kind": 131,
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "gf",
                                                        "rawText": "gf",
                                                        "flags": 96,
                                                        "start": 48,
                                                        "end": 51
                                                    },
                                                    "argumentList": {
                                                        "kind": 256,
                                                        "elements": [],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 52,
                                                        "end": 52
                                                    },
                                                    "flags": 268435488,
                                                    "start": 48,
                                                    "end": 53
                                                },
                                                "flags": 32,
                                                "start": 39,
                                                "end": 53
                                            },
                                            "flags": 16,
                                            "start": 39,
                                            "end": 53
                                        },
                                        {
                                            "kind": 124,
                                            "block": {
                                                "kind": 249,
                                                "statements": [
                                                    {
                                                        "kind": 155,
                                                        "declareKeyword": null,
                                                        "varKeyword": {
                                                            "kind": 37757002,
                                                            "flags": 80,
                                                            "start": 55,
                                                            "end": 59
                                                        },
                                                        "declarationList": {
                                                            "kind": 156,
                                                            "declarations": [
                                                                {
                                                                    "kind": 157,
                                                                    "binding": {
                                                                        "kind": 134299649,
                                                                        "text": "a",
                                                                        "rawText": "a",
                                                                        "flags": 96,
                                                                        "start": 59,
                                                                        "end": 61
                                                                    },
                                                                    "optionalToken": null,
                                                                    "type": null,
                                                                    "initializer": {
                                                                        "kind": 134299649,
                                                                        "text": "yield",
                                                                        "rawText": "yield",
                                                                        "flags": 96,
                                                                        "start": 63,
                                                                        "end": 69
                                                                    },
                                                                    "flags": 16,
                                                                    "start": 59,
                                                                    "end": 69
                                                                }
                                                            ],
                                                            "flags": 16,
                                                            "start": 59,
                                                            "end": 69
                                                        },
                                                        "flags": 16,
                                                        "start": 55,
                                                        "end": 69
                                                    },
                                                    {
                                                        "kind": 120,
                                                        "expression": {
                                                            "kind": 201392131,
                                                            "text": "foo",
                                                            "rawText": "'foo'",
                                                            "flags": 4194400,
                                                            "start": 69,
                                                            "end": 75
                                                        },
                                                        "flags": 16,
                                                        "start": 69,
                                                        "end": 76
                                                    }
                                                ],
                                                "flags": 16,
                                                "start": 55,
                                                "end": 76
                                            },
                                            "flags": 16,
                                            "start": 53,
                                            "end": 78
                                        }
                                    ],
                                    "flags": 32,
                                    "start": 39,
                                    "end": 78
                                },
                                "flags": 32,
                                "start": 37,
                                "end": 80
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 16,
                            "start": 18,
                            "end": 80
                        }
                    ],
                    "flags": 32,
                    "start": 18,
                    "end": 80
                },
                "flags": 32,
                "start": 16,
                "end": 81
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 81
        }
    ],
    "isModule": false,
    "source": "function * gen() { function not_gen() { unction* gf() { var a = yield 'foo'; } }}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 81
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a `;` - start: 53, end: 55
✖ ',' expected - start: 69, end: 75
✖ Expected a `;` - start: 69, end: 75

```

