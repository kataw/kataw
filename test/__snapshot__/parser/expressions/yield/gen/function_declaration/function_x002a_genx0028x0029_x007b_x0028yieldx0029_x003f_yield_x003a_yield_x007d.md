# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: function declaration
> :: case: function * gen() { (yield) ? yield : yield }
## Input

`````js
function not_gen() { function * gen() { (yield) ? yield : yield } }}
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
                                "value": "gen",
                                "autofix": 0,
                                "flags": 768,
                                "start": 31,
                                "end": 35
                            },
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 36,
                                "end": 37
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
                                                    "kind": 121,
                                                    "expression": {
                                                        "kind": 229,
                                                        "delegate": false,
                                                        "asteriskToken": null,
                                                        "expression": null,
                                                        "autofix": 0,
                                                        "flags": 256,
                                                        "start": 41,
                                                        "end": 46
                                                    },
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 39,
                                                    "end": 47
                                                },
                                                "questionToken": {
                                                    "kind": 22,
                                                    "autofix": 0,
                                                    "flags": 0,
                                                    "start": 47,
                                                    "end": 49
                                                },
                                                "consequent": {
                                                    "kind": 229,
                                                    "delegate": false,
                                                    "asteriskToken": null,
                                                    "expression": null,
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 49,
                                                    "end": 55
                                                },
                                                "colonToken": {
                                                    "kind": 21,
                                                    "autofix": 0,
                                                    "flags": 0,
                                                    "start": 55,
                                                    "end": 57
                                                },
                                                "alternate": {
                                                    "kind": 229,
                                                    "delegate": false,
                                                    "asteriskToken": null,
                                                    "expression": null,
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 57,
                                                    "end": 63
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 39,
                                                "end": 63
                                            },
                                            "autofix": 0,
                                            "flags": 128,
                                            "start": 39,
                                            "end": 63
                                        }
                                    ],
                                    "multiline": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 39,
                                    "end": 63
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 37,
                                "end": 65
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "autofix": 0,
                            "flags": 2304,
                            "start": 20,
                            "end": 65
                        }
                    ],
                    "multiline": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 20,
                    "end": 65
                },
                "autofix": 0,
                "flags": 256,
                "start": 18,
                "end": 67
            },
            "typeParameters": null,
            "returnType": null,
            "autofix": 0,
            "flags": 256,
            "start": 0,
            "end": 67
        }
    ],
    "isModule": false,
    "text": "function not_gen() { function * gen() { (yield) ? yield : yield } }}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 67,
            "end": 68
        }
    ],
    "start": 0,
    "end": 68
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: function declaration
> :: case: function * gen() { (yield) ? yield : yield }
## Input

`````js
function not_gen() { function * gen() { (yield) ? yield : yield } }}
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: function declaration
> :: case: function * gen() { (yield) ? yield : yield }
## Input

`````js
function not_gen() { function * gen() { (yield) ? yield : yield } }}
`````
```

