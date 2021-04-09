# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: function* gf() { +yield 2; }
## Input

`````js
function* gf() { +yield 2; }
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
                "value": "gf",
                "autofix": 0,
                "flags": 768,
                "start": 9,
                "end": 12
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "autofix": 0,
                "flags": 256,
                "start": 13,
                "end": 14
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 126,
                                "operandToken": {
                                    "kind": 34098,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 16,
                                    "end": 18
                                },
                                "expression": {
                                    "kind": 229,
                                    "delegate": false,
                                    "asteriskToken": null,
                                    "expression": {
                                        "kind": 81921,
                                        "value": 2,
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 23,
                                        "end": 25
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 18,
                                    "end": 25
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 16,
                                "end": 25
                            },
                            "autofix": 0,
                            "flags": 128,
                            "start": 16,
                            "end": 26
                        }
                    ],
                    "multiline": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 16,
                    "end": 26
                },
                "autofix": 0,
                "flags": 256,
                "start": 14,
                "end": 28
            },
            "typeParameters": null,
            "returnType": null,
            "autofix": 0,
            "flags": 2304,
            "start": 0,
            "end": 28
        }
    ],
    "isModule": false,
    "text": "function* gf() { +yield 2; }",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 28
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: function* gf() { +yield 2; }
## Input

`````js
function* gf() { +yield 2; }
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: function* gf() { +yield 2; }
## Input

`````js
function* gf() { +yield 2; }
`````
```

