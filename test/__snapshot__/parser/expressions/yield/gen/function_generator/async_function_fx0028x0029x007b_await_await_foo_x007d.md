# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: function generator
> :: case: async function f(){ await await foo; }
## Input

`````js
function * gen() { function not_gen() { async function f(){ await await foo; } }}
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
                                            "kind": 176,
                                            "asyncKeyword": {
                                                "kind": 82031,
                                                "flags": 768,
                                                "start": 39,
                                                "end": 45
                                            },
                                            "functionKeyword": {
                                                "kind": 37814362,
                                                "flags": 768,
                                                "start": 45,
                                                "end": 54
                                            },
                                            "generatorToken": null,
                                            "name": {
                                                "kind": 81921,
                                                "text": "f",
                                                "rawText": "f",
                                                "flags": 768,
                                                "start": 54,
                                                "end": 56
                                            },
                                            "formalParameters": {
                                                "kind": 214,
                                                "formalParameterList": [],
                                                "trailingComma": false,
                                                "flags": 256,
                                                "start": 56,
                                                "end": 58
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
                                                                "kind": 208,
                                                                "awaitToken": {
                                                                    "kind": 82032,
                                                                    "flags": 768,
                                                                    "start": 59,
                                                                    "end": 65
                                                                },
                                                                "expression": {
                                                                    "kind": 208,
                                                                    "awaitToken": {
                                                                        "kind": 82032,
                                                                        "flags": 768,
                                                                        "start": 65,
                                                                        "end": 71
                                                                    },
                                                                    "expression": {
                                                                        "kind": 81921,
                                                                        "text": "foo",
                                                                        "rawText": "foo",
                                                                        "flags": 768,
                                                                        "start": 71,
                                                                        "end": 75
                                                                    },
                                                                    "flags": 256,
                                                                    "start": 65,
                                                                    "end": 75
                                                                },
                                                                "flags": 256,
                                                                "start": 59,
                                                                "end": 75
                                                            },
                                                            "flags": 128,
                                                            "start": 59,
                                                            "end": 76
                                                        }
                                                    ],
                                                    "multiline": false,
                                                    "flags": 256,
                                                    "start": 59,
                                                    "end": 76
                                                },
                                                "flags": 256,
                                                "start": 58,
                                                "end": 78
                                            },
                                            "typeParameters": null,
                                            "returnType": null,
                                            "flags": 1280,
                                            "start": 39,
                                            "end": 78
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 256,
                                    "start": 39,
                                    "end": 78
                                },
                                "flags": 256,
                                "start": 37,
                                "end": 80
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 256,
                            "start": 18,
                            "end": 80
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 18,
                    "end": 80
                },
                "flags": 256,
                "start": 16,
                "end": 81
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 2304,
            "start": 0,
            "end": 81
        }
    ],
    "isModule": false,
    "text": "function * gen() { function not_gen() { async function f(){ await await foo; } }}",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 81
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: function generator
> :: case: async function f(){ await await foo; }
## Input

`````js
function * gen() { function not_gen() { async function f(){ await await foo; } }}
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: function generator
> :: case: async function f(){ await await foo; }
## Input

`````js
function * gen() { function not_gen() { async function f(){ await await foo; } }}
`````
```

