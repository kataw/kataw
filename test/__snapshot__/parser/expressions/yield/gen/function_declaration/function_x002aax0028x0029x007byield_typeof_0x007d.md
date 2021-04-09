# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: function declaration
> :: case: function *a(){yield typeof 0}
## Input

`````js
function not_gen() { function *a(){yield typeof 0} }}
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
                                "end": 31
                            },
                            "name": {
                                "kind": 81921,
                                "value": "a",
                                "autofix": 0,
                                "flags": 768,
                                "start": 31,
                                "end": 32
                            },
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 33,
                                "end": 34
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
                                                    "kind": 126,
                                                    "operandToken": {
                                                        "kind": 4259885,
                                                        "autofix": 0,
                                                        "flags": 0,
                                                        "start": 40,
                                                        "end": 47
                                                    },
                                                    "expression": {
                                                        "kind": 81921,
                                                        "value": 0,
                                                        "autofix": 0,
                                                        "flags": 768,
                                                        "start": 47,
                                                        "end": 49
                                                    },
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 40,
                                                    "end": 49
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 35,
                                                "end": 49
                                            },
                                            "autofix": 0,
                                            "flags": 128,
                                            "start": 35,
                                            "end": 49
                                        }
                                    ],
                                    "multiline": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 35,
                                    "end": 49
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 34,
                                "end": 50
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "autofix": 0,
                            "flags": 2304,
                            "start": 20,
                            "end": 50
                        }
                    ],
                    "multiline": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 20,
                    "end": 50
                },
                "autofix": 0,
                "flags": 256,
                "start": 18,
                "end": 52
            },
            "typeParameters": null,
            "returnType": null,
            "autofix": 0,
            "flags": 256,
            "start": 0,
            "end": 52
        }
    ],
    "isModule": false,
    "text": "function not_gen() { function *a(){yield typeof 0} }}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 52,
            "end": 53
        }
    ],
    "start": 0,
    "end": 53
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: function declaration
> :: case: function *a(){yield typeof 0}
## Input

`````js
function not_gen() { function *a(){yield typeof 0} }}
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: function declaration
> :: case: function *a(){yield typeof 0}
## Input

`````js
function not_gen() { function *a(){yield typeof 0} }}
`````
```

