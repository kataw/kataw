# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: function declaration
> :: case: function* foo() { yield 2; if (true) { yield 3 }; yield 4 }
## Input

`````js
function not_gen() { function* foo() { yield 2; if (true) { yield 3 }; yield 4 } }}
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
                                            "kind": 120,
                                            "expression": {
                                                "kind": 229,
                                                "delegate": false,
                                                "asteriskToken": null,
                                                "expression": {
                                                    "kind": 81921,
                                                    "value": 2,
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 44,
                                                    "end": 46
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 38,
                                                "end": 46
                                            },
                                            "autofix": 0,
                                            "flags": 128,
                                            "start": 38,
                                            "end": 47
                                        },
                                        {
                                            "kind": 164,
                                            "expression": {
                                                "kind": 134,
                                                "value": true,
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 52,
                                                "end": 56
                                            },
                                            "consequent": {
                                                "kind": 249,
                                                "block": {
                                                    "kind": 124,
                                                    "statements": [
                                                        {
                                                            "kind": 120,
                                                            "expression": {
                                                                "kind": 229,
                                                                "delegate": false,
                                                                "asteriskToken": null,
                                                                "expression": {
                                                                    "kind": 81921,
                                                                    "value": 3,
                                                                    "autofix": 0,
                                                                    "flags": 768,
                                                                    "start": 65,
                                                                    "end": 67
                                                                },
                                                                "autofix": 0,
                                                                "flags": 256,
                                                                "start": 59,
                                                                "end": 67
                                                            },
                                                            "autofix": 0,
                                                            "flags": 128,
                                                            "start": 59,
                                                            "end": 67
                                                        }
                                                    ],
                                                    "multiLine": false,
                                                    "autofix": 0,
                                                    "flags": 128,
                                                    "start": 59,
                                                    "end": 67
                                                },
                                                "autofix": 0,
                                                "flags": 128,
                                                "start": 57,
                                                "end": 69
                                            },
                                            "alternate": null,
                                            "autofix": 0,
                                            "flags": 128,
                                            "start": 47,
                                            "end": 69
                                        },
                                        {
                                            "kind": 168,
                                            "autofix": 0,
                                            "flags": 128,
                                            "start": 69,
                                            "end": 70
                                        },
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 229,
                                                "delegate": false,
                                                "asteriskToken": null,
                                                "expression": {
                                                    "kind": 81921,
                                                    "value": 4,
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 76,
                                                    "end": 78
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 70,
                                                "end": 78
                                            },
                                            "autofix": 0,
                                            "flags": 128,
                                            "start": 70,
                                            "end": 78
                                        }
                                    ],
                                    "multiline": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 38,
                                    "end": 78
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 36,
                                "end": 80
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "autofix": 0,
                            "flags": 2304,
                            "start": 20,
                            "end": 80
                        }
                    ],
                    "multiline": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 20,
                    "end": 80
                },
                "autofix": 0,
                "flags": 256,
                "start": 18,
                "end": 82
            },
            "typeParameters": null,
            "returnType": null,
            "autofix": 0,
            "flags": 256,
            "start": 0,
            "end": 82
        }
    ],
    "isModule": false,
    "text": "function not_gen() { function* foo() { yield 2; if (true) { yield 3 }; yield 4 } }}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 82,
            "end": 83
        }
    ],
    "start": 0,
    "end": 83
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: function declaration
> :: case: function* foo() { yield 2; if (true) { yield 3 }; yield 4 }
## Input

`````js
function not_gen() { function* foo() { yield 2; if (true) { yield 3 }; yield 4 } }}
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: function declaration
> :: case: function* foo() { yield 2; if (true) { yield 3 }; yield 4 }
## Input

`````js
function not_gen() { function* foo() { yield 2; if (true) { yield 3 }; yield 4 } }}
`````
```

