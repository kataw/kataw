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
                            "asyncToken": {
                                "kind": 82031,
                                "autofix": 0,
                                "flags": 0,
                                "start": 20,
                                "end": 26
                            },
                            "generatorToken": null,
                            "name": {
                                "kind": 81921,
                                "value": "wrap",
                                "autofix": 0,
                                "flags": 768,
                                "start": 35,
                                "end": 40
                            },
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 41,
                                "end": 42
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "statements": [
                                        {
                                            "kind": 176,
                                            "asyncToken": {
                                                "kind": 82031,
                                                "autofix": 0,
                                                "flags": 0,
                                                "start": 44,
                                                "end": 50
                                            },
                                            "generatorToken": null,
                                            "name": {
                                                "kind": 81921,
                                                "value": "await",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 59,
                                                "end": 65
                                            },
                                            "formalParameters": {
                                                "kind": 214,
                                                "formalParameterList": [],
                                                "trailingComma": false,
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 66,
                                                "end": 67
                                            },
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "statements": [],
                                                    "multiline": false,
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 69,
                                                    "end": 69
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 67,
                                                "end": 71
                                            },
                                            "typeParameters": null,
                                            "returnType": null,
                                            "autofix": 0,
                                            "flags": 1280,
                                            "start": 44,
                                            "end": 71
                                        }
                                    ],
                                    "multiline": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 44,
                                    "end": 71
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 42,
                                "end": 73
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "autofix": 0,
                            "flags": 1280,
                            "start": 20,
                            "end": 73
                        },
                        {
                            "kind": 168,
                            "autofix": 0,
                            "flags": 128,
                            "start": 73,
                            "end": 74
                        }
                    ],
                    "multiline": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 20,
                    "end": 74
                },
                "autofix": 0,
                "flags": 256,
                "start": 18,
                "end": 76
            },
            "typeParameters": null,
            "returnType": null,
            "autofix": 0,
            "flags": 256,
            "start": 0,
            "end": 76
        }
    ],
    "isModule": false,
    "text": "function not_gen() { async function wrap() { async function await() { } }; }}",
    "fileName": "__root__",
    "autofix": 0,
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

