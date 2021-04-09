# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: function* g(){ x ? yield : y }
## Input

`````js
function* g(){ x ? yield : y }
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
                "end": 9
            },
            "name": {
                "kind": 81921,
                "value": "g",
                "autofix": 0,
                "flags": 768,
                "start": 9,
                "end": 11
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "autofix": 0,
                "flags": 256,
                "start": 12,
                "end": 13
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
                                    "start": 14,
                                    "end": 16
                                },
                                "questionToken": {
                                    "kind": 22,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 16,
                                    "end": 18
                                },
                                "consequent": {
                                    "kind": 229,
                                    "delegate": false,
                                    "asteriskToken": null,
                                    "expression": null,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 18,
                                    "end": 24
                                },
                                "colonToken": {
                                    "kind": 21,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 24,
                                    "end": 26
                                },
                                "alternate": {
                                    "kind": 81921,
                                    "value": "y",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 26,
                                    "end": 28
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 14,
                                "end": 28
                            },
                            "autofix": 0,
                            "flags": 128,
                            "start": 14,
                            "end": 28
                        }
                    ],
                    "multiline": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 14,
                    "end": 28
                },
                "autofix": 0,
                "flags": 256,
                "start": 13,
                "end": 30
            },
            "typeParameters": null,
            "returnType": null,
            "autofix": 0,
            "flags": 2304,
            "start": 0,
            "end": 30
        }
    ],
    "isModule": false,
    "text": "function* g(){ x ? yield : y }",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 30
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: function* g(){ x ? yield : y }
## Input

`````js
function* g(){ x ? yield : y }
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: function* g(){ x ? yield : y }
## Input

`````js
function* g(){ x ? yield : y }
`````
```

