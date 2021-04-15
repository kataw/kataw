# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: function declaration
> :: case: unction* gf() { var a = yield 'foo'; }
## Input

`````js
function not_gen() { unction* gf() { var a = yield 'foo'; } }}
`````

## Output

### Hybrid CST

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
                "flags": 768,
                "start": 0,
                "end": 8
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "not_gen",
                "rawText": "not_gen",
                "flags": 768,
                "start": 8,
                "end": 16
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 256,
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
                                    "flags": 768,
                                    "start": 20,
                                    "end": 28
                                },
                                "operatorToken": {
                                    "kind": 67143222,
                                    "flags": 768,
                                    "start": 28,
                                    "end": 29
                                },
                                "right": {
                                    "kind": 131,
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "gf",
                                        "rawText": "gf",
                                        "flags": 768,
                                        "start": 29,
                                        "end": 32
                                    },
                                    "argumentList": {
                                        "kind": 256,
                                        "elements": [],
                                        "trailingComma": false,
                                        "flags": 256,
                                        "start": 33,
                                        "end": 33
                                    },
                                    "flags": 256,
                                    "start": 29,
                                    "end": 34
                                },
                                "flags": 256,
                                "start": 20,
                                "end": 34
                            },
                            "flags": 128,
                            "start": 20,
                            "end": 34
                        },
                        {
                            "kind": 249,
                            "block": {
                                "kind": 124,
                                "statements": [
                                    {
                                        "kind": 155,
                                        "declareKeyword": null,
                                        "varKeyword": {
                                            "kind": 37757002,
                                            "flags": 768,
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
                                                        "flags": 768,
                                                        "start": 40,
                                                        "end": 42
                                                    },
                                                    "optionalToken": null,
                                                    "type": null,
                                                    "initializer": {
                                                        "kind": 134299649,
                                                        "text": "yield",
                                                        "rawText": "yield",
                                                        "flags": 768,
                                                        "start": 44,
                                                        "end": 50
                                                    },
                                                    "flags": 128,
                                                    "start": 40,
                                                    "end": 50
                                                }
                                            ],
                                            "flags": 128,
                                            "start": 40,
                                            "end": 50
                                        },
                                        "flags": 128,
                                        "start": 36,
                                        "end": 50
                                    }
                                ],
                                "multiLine": false,
                                "flags": 128,
                                "start": 36,
                                "end": 50
                            },
                            "flags": 128,
                            "start": 34,
                            "end": 50
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 201392131,
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 67109632,
                                "start": 50,
                                "end": 56
                            },
                            "flags": 128,
                            "start": 50,
                            "end": 57
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 20,
                    "end": 57
                },
                "flags": 256,
                "start": 18,
                "end": 59
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 128,
            "start": 0,
            "end": 59
        }
    ],
    "isModule": false,
    "text": "function not_gen() { unction* gf() { var a = yield 'foo'; } }}",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 34,
            "end": 36
        },
        {
            "kind": 2,
            "source": 2,
            "code": 4,
            "error": "',' expected",
            "start": 50,
            "end": 56
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 50,
            "end": 56
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 50,
            "end": 56
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 59,
            "end": 61
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 61,
            "end": 62
        }
    ],
    "start": 0,
    "end": 62
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

