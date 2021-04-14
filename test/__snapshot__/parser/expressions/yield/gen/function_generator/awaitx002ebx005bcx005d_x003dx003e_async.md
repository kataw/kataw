# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: function generator
> :: case: await.b[c] => async
## Input

`````js
function * gen() { function not_gen() { await.b[c] => async }}
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
                                                "kind": 130,
                                                "member": {
                                                    "kind": 129,
                                                    "member": {
                                                        "kind": 81921,
                                                        "text": "await",
                                                        "rawText": "await",
                                                        "flags": 768,
                                                        "start": 39,
                                                        "end": 45
                                                    },
                                                    "expression": {
                                                        "kind": 81921,
                                                        "text": "b",
                                                        "rawText": "b",
                                                        "flags": 768,
                                                        "start": 46,
                                                        "end": 47
                                                    },
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 39,
                                                    "end": 47
                                                },
                                                "expression": {
                                                    "kind": 81921,
                                                    "text": "c",
                                                    "rawText": "c",
                                                    "flags": 768,
                                                    "start": 48,
                                                    "end": 49
                                                },
                                                "flags": 256,
                                                "start": 39,
                                                "end": 50
                                            },
                                            "flags": 128,
                                            "start": 39,
                                            "end": 50
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 256,
                                    "start": 39,
                                    "end": 50
                                },
                                "flags": 256,
                                "start": 37,
                                "end": 50
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 256,
                            "start": 18,
                            "end": 50
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 18,
                    "end": 50
                },
                "flags": 256,
                "start": 16,
                "end": 50
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 2304,
            "start": 0,
            "end": 50
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "text": "async",
                "rawText": "async",
                "flags": 768,
                "start": 53,
                "end": 59
            },
            "flags": 128,
            "start": 53,
            "end": 59
        }
    ],
    "isModule": false,
    "text": "function * gen() { function not_gen() { await.b[c] => async }}",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 50,
            "end": 53
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 50,
            "end": 53
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 50,
            "end": 53
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 50,
            "end": 53
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
- Path: r
> :: test: function generator
> :: case: await.b[c] => async
## Input

`````js
function * gen() { function not_gen() { await.b[c] => async }}
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: function generator
> :: case: await.b[c] => async
## Input

`````js
function * gen() { function not_gen() { await.b[c] => async }}
`````
```

