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
                                            "kind": 155,
                                            "varKeyword": {
                                                "kind": 37757002,
                                                "flags": 768,
                                                "start": 38,
                                                "end": 42
                                            },
                                            "declarationList": {
                                                "kind": 156,
                                                "declarations": [
                                                    {
                                                        "kind": 157,
                                                        "binding": {
                                                            "kind": 81921,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 768,
                                                            "start": 42,
                                                            "end": 44
                                                        },
                                                        "optionalToken": null,
                                                        "type": null,
                                                        "initializer": {
                                                            "kind": 81921,
                                                            "text": 10,
                                                            "rawText": "10",
                                                            "flags": 768,
                                                            "start": 46,
                                                            "end": 49
                                                        },
                                                        "flags": 128,
                                                        "start": 42,
                                                        "end": 49
                                                    }
                                                ],
                                                "flags": 128,
                                                "start": 42,
                                                "end": 49
                                            },
                                            "flags": 128,
                                            "start": 38,
                                            "end": 50
                                        },
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 229,
                                                "yieldKeyword": {
                                                    "kind": 8454253,
                                                    "flags": 768,
                                                    "start": 50,
                                                    "end": 56
                                                },
                                                "delegate": false,
                                                "asteriskToken": null,
                                                "expression": {
                                                    "kind": 81921,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 768,
                                                    "start": 56,
                                                    "end": 58
                                                },
                                                "flags": 256,
                                                "start": 50,
                                                "end": 58
                                            },
                                            "flags": 128,
                                            "start": 50,
                                            "end": 59
                                        },
                                        {
                                            "kind": 161,
                                            "returnKeyword": {
                                                "kind": 37757022,
                                                "flags": 768,
                                                "start": 59,
                                                "end": 66
                                            },
                                            "expression": {
                                                "kind": 81921,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 768,
                                                "start": 66,
                                                "end": 68
                                            },
                                            "flags": 128,
                                            "start": 0,
                                            "end": 59
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 256,
                                    "start": 38,
                                    "end": 69
                                },
                                "flags": 256,
                                "start": 36,
                                "end": 71
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 2304,
                            "start": 20,
                            "end": 71
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 20,
                    "end": 71
                },
                "flags": 256,
                "start": 18,
                "end": 73
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 256,
            "start": 0,
            "end": 73
        }
    ],
    "isModule": false,
    "text": "function not_gen() { function* foo() { var x = 10; yield 1; return x; } }}",
    "fileName": "__root__",
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

