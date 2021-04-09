# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: function * gen() { (yield) ? yield : yield }
## Input

`````js
function * gen() { (yield) ? yield : yield }
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
            "generatorToken": {
                "kind": 67143222,
                "autofix": 0,
                "flags": 0,
                "start": 8,
                "end": 10
            },
            "name": {
                "kind": 81921,
                "value": "gen",
                "autofix": 0,
                "flags": 768,
                "start": 10,
                "end": 14
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "autofix": 0,
                "flags": 256,
                "start": 15,
                "end": 16
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
                                        "start": 20,
                                        "end": 25
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 18,
                                    "end": 26
                                },
                                "questionToken": {
                                    "kind": 22,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 26,
                                    "end": 28
                                },
                                "consequent": {
                                    "kind": 229,
                                    "delegate": false,
                                    "asteriskToken": null,
                                    "expression": null,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 28,
                                    "end": 34
                                },
                                "colonToken": {
                                    "kind": 21,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 34,
                                    "end": 36
                                },
                                "alternate": {
                                    "kind": 229,
                                    "delegate": false,
                                    "asteriskToken": null,
                                    "expression": null,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 36,
                                    "end": 42
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 18,
                                "end": 42
                            },
                            "autofix": 0,
                            "flags": 128,
                            "start": 18,
                            "end": 42
                        }
                    ],
                    "multiline": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 18,
                    "end": 42
                },
                "autofix": 0,
                "flags": 256,
                "start": 16,
                "end": 44
            },
            "typeParameters": null,
            "returnType": null,
            "autofix": 0,
            "flags": 2304,
            "start": 0,
            "end": 44
        }
    ],
    "isModule": false,
    "text": "function * gen() { (yield) ? yield : yield }",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 44
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: function * gen() { (yield) ? yield : yield }
## Input

`````js
function * gen() { (yield) ? yield : yield }
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: function * gen() { (yield) ? yield : yield }
## Input

`````js
function * gen() { (yield) ? yield : yield }
`````
```

