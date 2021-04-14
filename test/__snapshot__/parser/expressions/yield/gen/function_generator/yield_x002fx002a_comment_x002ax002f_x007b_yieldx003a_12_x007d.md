# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: function generator
> :: case: yield /* comment */ { yield: 12 }
## Input

`````js
function * gen() { function not_gen() { yield /* comment */ { yield: 12 } }}
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
            "generatorToken": {
                "kind": 67143222,
                "flags": 768,
                "start": 8,
                "end": 10
            },
            "name": {
                "kind": 81921,
                "text": "gen",
                "rawText": "gen",
                "flags": 768,
                "start": 10,
                "end": 14
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 256,
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
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37814362,
                                "flags": 768,
                                "start": 18,
                                "end": 27
                            },
                            "generatorToken": null,
                            "name": {
                                "kind": 81921,
                                "text": "not_gen",
                                "rawText": "not_gen",
                                "flags": 768,
                                "start": 27,
                                "end": 35
                            },
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 256,
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
                                                "kind": 81921,
                                                "text": "yield",
                                                "rawText": "yield",
                                                "flags": 768,
                                                "start": 39,
                                                "end": 45
                                            },
                                            "flags": 128,
                                            "start": 39,
                                            "end": 45
                                        },
                                        {
                                            "kind": 249,
                                            "block": {
                                                "kind": 124,
                                                "statements": [
                                                    {
                                                        "kind": 120,
                                                        "expression": {
                                                            "kind": 81921,
                                                            "text": "yield",
                                                            "rawText": "yield",
                                                            "flags": 768,
                                                            "start": 61,
                                                            "end": 67
                                                        },
                                                        "flags": 128,
                                                        "start": 61,
                                                        "end": 67
                                                    }
                                                ],
                                                "multiLine": false,
                                                "flags": 128,
                                                "start": 61,
                                                "end": 67
                                            },
                                            "flags": 128,
                                            "start": 45,
                                            "end": 67
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 256,
                                    "start": 39,
                                    "end": 67
                                },
                                "flags": 256,
                                "start": 37,
                                "end": 67
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 256,
                            "start": 18,
                            "end": 67
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 18,
                    "end": 67
                },
                "flags": 256,
                "start": 16,
                "end": 67
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 2304,
            "start": 0,
            "end": 67
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "text": 12,
                "rawText": "12",
                "flags": 768,
                "start": 68,
                "end": 71
            },
            "flags": 128,
            "start": 68,
            "end": 71
        }
    ],
    "isModule": false,
    "text": "function * gen() { function not_gen() { yield /* comment */ { yield: 12 } }}",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 45,
            "end": 61
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 67,
            "end": 68
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 67,
            "end": 68
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 67,
            "end": 68
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 67,
            "end": 68
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 67,
            "end": 68
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 71,
            "end": 73
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 73,
            "end": 75
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 75,
            "end": 76
        }
    ],
    "start": 0,
    "end": 76
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: function generator
> :: case: yield /* comment */ { yield: 12 }
## Input

`````js
function * gen() { function not_gen() { yield /* comment */ { yield: 12 } }}
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: function generator
> :: case: yield /* comment */ { yield: 12 }
## Input

`````js
function * gen() { function not_gen() { yield /* comment */ { yield: 12 } }}
`````
```

