# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: function declaration
> :: case: async function wrap() { async function await() { } };
## Input

`````js
function not_gen() { async function wrap() { async function await() { } }; }}
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
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 768,
                                "start": 20,
                                "end": 26
                            },
                            "functionKeyword": {
                                "kind": 37814362,
                                "flags": 768,
                                "start": 26,
                                "end": 35
                            },
                            "generatorToken": null,
                            "name": {
                                "kind": 81921,
                                "text": "wrap",
                                "rawText": "wrap",
                                "flags": 768,
                                "start": 35,
                                "end": 40
                            },
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 256,
                                "start": 40,
                                "end": 42
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
                                                "start": 44,
                                                "end": 50
                                            },
                                            "functionKeyword": {
                                                "kind": 37814362,
                                                "flags": 768,
                                                "start": 50,
                                                "end": 59
                                            },
                                            "generatorToken": null,
                                            "name": {
                                                "kind": 81921,
                                                "text": "await",
                                                "rawText": "await",
                                                "flags": 768,
                                                "start": 59,
                                                "end": 65
                                            },
                                            "formalParameters": {
                                                "kind": 214,
                                                "formalParameterList": [],
                                                "trailingComma": false,
                                                "flags": 256,
                                                "start": 65,
                                                "end": 67
                                            },
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [],
                                                    "multiline": false,
                                                    "flags": 256,
                                                    "start": 69,
                                                    "end": 69
                                                },
                                                "flags": 256,
                                                "start": 67,
                                                "end": 71
                                            },
                                            "typeParameters": null,
                                            "returnType": null,
                                            "flags": 1280,
                                            "start": 44,
                                            "end": 71
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 256,
                                    "start": 44,
                                    "end": 71
                                },
                                "flags": 256,
                                "start": 42,
                                "end": 73
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 1280,
                            "start": 20,
                            "end": 73
                        },
                        {
                            "kind": 168,
                            "flags": 128,
                            "start": 73,
                            "end": 74
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 20,
                    "end": 74
                },
                "flags": 256,
                "start": 18,
                "end": 76
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 256,
            "start": 0,
            "end": 76
        }
    ],
    "isModule": false,
    "text": "function not_gen() { async function wrap() { async function await() { } }; }}",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 76,
            "end": 77
        }
    ],
    "start": 0,
    "end": 77
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: function declaration
> :: case: async function wrap() { async function await() { } };
## Input

`````js
function not_gen() { async function wrap() { async function await() { } }; }}
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: function declaration
> :: case: async function wrap() { async function await() { } };
## Input

`````js
function not_gen() { async function wrap() { async function await() { } }; }}
`````
```

