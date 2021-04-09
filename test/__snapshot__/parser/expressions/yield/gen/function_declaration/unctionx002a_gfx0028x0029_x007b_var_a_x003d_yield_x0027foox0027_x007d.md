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
    "statements": [
        {
            "kind": 176,
            "asyncToken": null,
            "generatorToken": null,
            "name": {
                "kind": 81921,
                "value": "not_gen",
                "autofix": 0,
                "flags": 768,
                "start": 8,
                "end": 16
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "autofix": 0,
                "flags": 256,
                "start": 17,
                "end": 18
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 81921,
                                    "value": "unction",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 20,
                                    "end": 28
                                },
                                "operatorToken": {
                                    "kind": 67143222,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 28,
                                    "end": 29
                                },
                                "right": {
                                    "kind": 131,
                                    "expression": {
                                        "kind": 81921,
                                        "value": "gf",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 29,
                                        "end": 32
                                    },
                                    "argumentList": {
                                        "kind": 256,
                                        "elements": [],
                                        "trailingComma": false,
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 33,
                                        "end": 33
                                    },
                                    "flags": 256,
                                    "start": 29,
                                    "end": 34
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 20,
                                "end": 34
                            },
                            "autofix": 0,
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
                                        "declarationList": {
                                            "kind": 156,
                                            "declarations": [
                                                {
                                                    "kind": 157,
                                                    "binding": {
                                                        "kind": 81921,
                                                        "value": "a",
                                                        "autofix": 0,
                                                        "flags": 768,
                                                        "start": 40,
                                                        "end": 42
                                                    },
                                                    "optionalToken": null,
                                                    "type": null,
                                                    "initializer": {
                                                        "kind": 81921,
                                                        "value": "yield",
                                                        "autofix": 0,
                                                        "flags": 768,
                                                        "start": 44,
                                                        "end": 50
                                                    },
                                                    "autofix": 0,
                                                    "flags": 128,
                                                    "start": 40,
                                                    "end": 50
                                                }
                                            ],
                                            "autofix": 0,
                                            "flags": 128,
                                            "start": 40,
                                            "end": 50
                                        },
                                        "autofix": 0,
                                        "flags": 128,
                                        "start": 36,
                                        "end": 50
                                    }
                                ],
                                "multiLine": false,
                                "autofix": 0,
                                "flags": 128,
                                "start": 36,
                                "end": 50
                            },
                            "autofix": 0,
                            "flags": 128,
                            "start": 34,
                            "end": 50
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 67174403,
                                "value": "foo",
                                "autofix": 0,
                                "flags": 768,
                                "start": 50,
                                "end": 56
                            },
                            "autofix": 0,
                            "flags": 128,
                            "start": 50,
                            "end": 57
                        }
                    ],
                    "multiline": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 20,
                    "end": 57
                },
                "autofix": 0,
                "flags": 256,
                "start": 18,
                "end": 59
            },
            "typeParameters": null,
            "returnType": null,
            "autofix": 0,
            "flags": 256,
            "start": 0,
            "end": 59
        }
    ],
    "isModule": false,
    "text": "function not_gen() { unction* gf() { var a = yield 'foo'; } }}",
    "fileName": "__root__",
    "autofix": 0,
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
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: function declaration
> :: case: unction* gf() { var a = yield 'foo'; }
## Input

`````js
function not_gen() { unction* gf() { var a = yield 'foo'; } }}
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: function declaration
> :: case: unction* gf() { var a = yield 'foo'; }
## Input

`````js
function not_gen() { unction* gf() { var a = yield 'foo'; } }}
`````
```

