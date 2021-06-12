# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: kataw8/test\__snapshot__/parser/expressions/yield/autogen.md
- Path: kataw8/test\__snapshot__\parser\expressions\yield\gen\function_declaration
> :: test: function declaration
> :: case: unction* gf() { var a = yield 'foo'; }
## Input

`````js
function not_gen() { unction* gf() { var a = yield 'foo'; } }}
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
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "not_gen",
                "rawText": "not_gen",
                "flags": 96,
                "start": 8,
                "end": 16
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 16,
                "end": 18
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
                                    "start": 20,
                                    "end": 28
                                },
                                "operatorToken": {
                                    "kind": 67143222,
                                    "flags": 64,
                                    "start": 28,
                                    "end": 29
                                },
                                "right": {
                                    "kind": 131,
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "gf",
                                        "rawText": "gf",
                                        "flags": 96,
                                        "start": 29,
                                        "end": 32
                                    },
                                    "argumentList": {
                                        "kind": 256,
                                        "elements": [],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 33,
                                        "end": 33
                                    },
                                    "flags": 268435488,
                                    "start": 29,
                                    "end": 34
                                },
                                "flags": 32,
                                "start": 20,
                                "end": 34
                            },
                            "flags": 16,
                            "start": 20,
                            "end": 34
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
                                            "start": 36,
                                            "end": 40
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
                                                        "start": 40,
                                                        "end": 42
                                                    },
                                                    "optionalToken": null,
                                                    "type": null,
                                                    "initializer": {
                                                        "kind": 134299649,
                                                        "text": "yield",
                                                        "rawText": "yield",
                                                        "flags": 96,
                                                        "start": 44,
                                                        "end": 50
                                                    },
                                                    "flags": 16,
                                                    "start": 40,
                                                    "end": 50
                                                }
                                            ],
                                            "flags": 16,
                                            "start": 40,
                                            "end": 50
                                        },
                                        "flags": 16,
                                        "start": 36,
                                        "end": 50
                                    },
                                    {
                                        "kind": 120,
                                        "expression": {
                                            "kind": 201392131,
                                            "text": "foo",
                                            "rawText": "'foo'",
                                            "flags": 4194400,
                                            "start": 50,
                                            "end": 56
                                        },
                                        "flags": 16,
                                        "start": 50,
                                        "end": 57
                                    }
                                ],
                                "flags": 16,
                                "start": 36,
                                "end": 57
                            },
                            "flags": 16,
                            "start": 34,
                            "end": 59
                        }
                    ],
                    "flags": 32,
                    "start": 20,
                    "end": 59
                },
                "flags": 32,
                "start": 18,
                "end": 61
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 61
        }
    ],
    "isModule": false,
    "source": "function not_gen() { unction* gf() { var a = yield 'foo'; } }}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 62
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a `;` - start: 34, end: 36
✖ ',' expected - start: 50, end: 56
✖ Expected a `;` - start: 50, end: 56
✖ Declaration or statement expected - start: 61, end: 62

```

