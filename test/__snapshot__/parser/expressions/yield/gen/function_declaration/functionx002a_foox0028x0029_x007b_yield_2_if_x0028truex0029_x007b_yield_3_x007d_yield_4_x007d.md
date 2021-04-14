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
    "directives": [],
    "statements": [
        {
            "kind": 176,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37814362,
                "flags": 768,
                "start": 0,
                "end": 8
            },
            "generatorToken": null,
            "name": {
                "kind": 81921,
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
                            "kind": 176,
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37814362,
                                "flags": 768,
                                "start": 20,
                                "end": 29
                            },
                            "generatorToken": {
                                "kind": 67143222,
                                "flags": 768,
                                "start": 29,
                                "end": 30
                            },
                            "name": {
                                "kind": 81921,
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 768,
                                "start": 30,
                                "end": 34
                            },
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 256,
                                "start": 34,
                                "end": 36
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
                                                "kind": 229,
                                                "yieldKeyword": {
                                                    "kind": 8454253,
                                                    "flags": 768,
                                                    "start": 38,
                                                    "end": 44
                                                },
                                                "delegate": false,
                                                "asteriskToken": null,
                                                "expression": {
                                                    "kind": 81921,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 44,
                                                    "end": 46
                                                },
                                                "flags": 256,
                                                "start": 38,
                                                "end": 46
                                            },
                                            "flags": 128,
                                            "start": 38,
                                            "end": 47
                                        },
                                        {
                                            "kind": 164,
                                            "ifKeyword": {
                                                "kind": 37757019,
                                                "flags": 768,
                                                "start": 47,
                                                "end": 50
                                            },
                                            "expression": {
                                                "kind": 134,
                                                "text": true,
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
                                                                "yieldKeyword": {
                                                                    "kind": 8454253,
                                                                    "flags": 768,
                                                                    "start": 59,
                                                                    "end": 65
                                                                },
                                                                "delegate": false,
                                                                "asteriskToken": null,
                                                                "expression": {
                                                                    "kind": 81921,
                                                                    "text": 3,
                                                                    "rawText": "3",
                                                                    "flags": 768,
                                                                    "start": 65,
                                                                    "end": 67
                                                                },
                                                                "flags": 256,
                                                                "start": 59,
                                                                "end": 67
                                                            },
                                                            "flags": 128,
                                                            "start": 59,
                                                            "end": 67
                                                        }
                                                    ],
                                                    "multiLine": false,
                                                    "flags": 128,
                                                    "start": 59,
                                                    "end": 67
                                                },
                                                "flags": 128,
                                                "start": 57,
                                                "end": 69
                                            },
                                            "elseKeyword": null,
                                            "alternate": null,
                                            "flags": 128,
                                            "start": 47,
                                            "end": 69
                                        },
                                        {
                                            "kind": 168,
                                            "flags": 128,
                                            "start": 69,
                                            "end": 70
                                        },
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 229,
                                                "yieldKeyword": {
                                                    "kind": 8454253,
                                                    "flags": 768,
                                                    "start": 70,
                                                    "end": 76
                                                },
                                                "delegate": false,
                                                "asteriskToken": null,
                                                "expression": {
                                                    "kind": 81921,
                                                    "text": 4,
                                                    "rawText": "4",
                                                    "flags": 768,
                                                    "start": 76,
                                                    "end": 78
                                                },
                                                "flags": 256,
                                                "start": 70,
                                                "end": 78
                                            },
                                            "flags": 128,
                                            "start": 70,
                                            "end": 78
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 256,
                                    "start": 38,
                                    "end": 78
                                },
                                "flags": 256,
                                "start": 36,
                                "end": 80
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 2304,
                            "start": 20,
                            "end": 80
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 20,
                    "end": 80
                },
                "flags": 256,
                "start": 18,
                "end": 82
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 256,
            "start": 0,
            "end": 82
        }
    ],
    "isModule": false,
    "text": "function not_gen() { function* foo() { yield 2; if (true) { yield 3 }; yield 4 } }}",
    "fileName": "__root__",
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

