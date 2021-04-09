# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: function declaration
> :: case: function* foo() { var x = 10; yield 1; return x; }
## Input

`````js
function not_gen() { function* foo() { var x = 10; yield 1; return x; } }}
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
                            "kind": 176,
                            "asyncToken": null,
                            "generatorToken": {
                                "kind": 67143222,
                                "autofix": 0,
                                "flags": 0,
                                "start": 29,
                                "end": 30
                            },
                            "name": {
                                "kind": 81921,
                                "value": "foo",
                                "autofix": 0,
                                "flags": 768,
                                "start": 30,
                                "end": 34
                            },
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 35,
                                "end": 36
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
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
                                                            "value": "x",
                                                            "autofix": 0,
                                                            "flags": 768,
                                                            "start": 42,
                                                            "end": 44
                                                        },
                                                        "optionalToken": null,
                                                        "type": null,
                                                        "initializer": {
                                                            "kind": 81921,
                                                            "value": 10,
                                                            "autofix": 0,
                                                            "flags": 768,
                                                            "start": 46,
                                                            "end": 49
                                                        },
                                                        "autofix": 0,
                                                        "flags": 128,
                                                        "start": 42,
                                                        "end": 49
                                                    }
                                                ],
                                                "autofix": 0,
                                                "flags": 128,
                                                "start": 42,
                                                "end": 49
                                            },
                                            "autofix": 0,
                                            "flags": 128,
                                            "start": 38,
                                            "end": 50
                                        },
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 229,
                                                "delegate": false,
                                                "asteriskToken": null,
                                                "expression": {
                                                    "kind": 81921,
                                                    "value": 1,
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 56,
                                                    "end": 58
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 50,
                                                "end": 58
                                            },
                                            "autofix": 0,
                                            "flags": 128,
                                            "start": 50,
                                            "end": 59
                                        },
                                        {
                                            "kind": 161,
                                            "expression": {
                                                "kind": 81921,
                                                "value": "x",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 66,
                                                "end": 68
                                            },
                                            "autofix": 0,
                                            "flags": 128,
                                            "start": 0,
                                            "end": 59
                                        }
                                    ],
                                    "multiline": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 38,
                                    "end": 69
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 36,
                                "end": 71
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "autofix": 0,
                            "flags": 2304,
                            "start": 20,
                            "end": 71
                        }
                    ],
                    "multiline": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 20,
                    "end": 71
                },
                "autofix": 0,
                "flags": 256,
                "start": 18,
                "end": 73
            },
            "typeParameters": null,
            "returnType": null,
            "autofix": 0,
            "flags": 256,
            "start": 0,
            "end": 73
        }
    ],
    "isModule": false,
    "text": "function not_gen() { function* foo() { var x = 10; yield 1; return x; } }}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 73,
            "end": 74
        }
    ],
    "start": 0,
    "end": 74
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: function declaration
> :: case: function* foo() { var x = 10; yield 1; return x; }
## Input

`````js
function not_gen() { function* foo() { var x = 10; yield 1; return x; } }}
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: function declaration
> :: case: function* foo() { var x = 10; yield 1; return x; }
## Input

`````js
function not_gen() { function* foo() { var x = 10; yield 1; return x; } }}
`````
```

