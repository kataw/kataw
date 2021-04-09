# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: function declaration
> :: case: function* g(){ x ? yield : y }
## Input

`````js
function not_gen() { function* g(){ x ? yield : y } }}
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
                                "value": "g",
                                "autofix": 0,
                                "flags": 768,
                                "start": 30,
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
                                                "kind": 197,
                                                "shortCircuit": {
                                                    "kind": 81921,
                                                    "value": "x",
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 35,
                                                    "end": 37
                                                },
                                                "questionToken": {
                                                    "kind": 22,
                                                    "autofix": 0,
                                                    "flags": 0,
                                                    "start": 37,
                                                    "end": 39
                                                },
                                                "consequent": {
                                                    "kind": 229,
                                                    "delegate": false,
                                                    "asteriskToken": null,
                                                    "expression": null,
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 39,
                                                    "end": 45
                                                },
                                                "colonToken": {
                                                    "kind": 21,
                                                    "autofix": 0,
                                                    "flags": 0,
                                                    "start": 45,
                                                    "end": 47
                                                },
                                                "alternate": {
                                                    "kind": 81921,
                                                    "value": "y",
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 47,
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
                                "end": 51
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "autofix": 0,
                            "flags": 2304,
                            "start": 20,
                            "end": 51
                        }
                    ],
                    "multiline": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 20,
                    "end": 51
                },
                "autofix": 0,
                "flags": 256,
                "start": 18,
                "end": 53
            },
            "typeParameters": null,
            "returnType": null,
            "autofix": 0,
            "flags": 256,
            "start": 0,
            "end": 53
        }
    ],
    "isModule": false,
    "text": "function not_gen() { function* g(){ x ? yield : y } }}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 53,
            "end": 54
        }
    ],
    "start": 0,
    "end": 54
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: function declaration
> :: case: function* g(){ x ? yield : y }
## Input

`````js
function not_gen() { function* g(){ x ? yield : y } }}
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: function declaration
> :: case: function* g(){ x ? yield : y }
## Input

`````js
function not_gen() { function* g(){ x ? yield : y } }}
`````
```

