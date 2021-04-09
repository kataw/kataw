# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: function declaration
> :: case: x = class extends (a ? null : yield) { }
## Input

`````js
function not_gen() { x = class extends (a ? null : yield) { } }}
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
                            "kind": 120,
                            "expression": {
                                "kind": 125,
                                "left": {
                                    "kind": 81921,
                                    "value": "x",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 20,
                                    "end": 22
                                },
                                "operatorToken": {
                                    "kind": 37814352,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 20,
                                    "end": 24
                                },
                                "right": {
                                    "kind": 189,
                                    "decorators": null,
                                    "name": null,
                                    "typeParameters": null,
                                    "classHeritage": {
                                        "kind": 279,
                                        "expression": {
                                            "kind": 121,
                                            "expression": {
                                                "kind": 197,
                                                "shortCircuit": {
                                                    "kind": 81921,
                                                    "value": "a",
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 40,
                                                    "end": 41
                                                },
                                                "questionToken": {
                                                    "kind": 22,
                                                    "autofix": 0,
                                                    "flags": 0,
                                                    "start": 41,
                                                    "end": 43
                                                },
                                                "consequent": {
                                                    "kind": 269,
                                                    "value": null,
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 43,
                                                    "end": 48
                                                },
                                                "colonToken": {
                                                    "kind": 21,
                                                    "autofix": 0,
                                                    "flags": 0,
                                                    "start": 48,
                                                    "end": 50
                                                },
                                                "alternate": {
                                                    "kind": 81921,
                                                    "value": "yield",
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 50,
                                                    "end": 56
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 38,
                                                "end": 56
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 38,
                                            "end": 57
                                        },
                                        "typeParameter": null,
                                        "flags": 128,
                                        "start": 38,
                                        "end": 57
                                    },
                                    "members": {
                                        "kind": 277,
                                        "elements": [],
                                        "flags": 256,
                                        "start": 59,
                                        "end": 61
                                    },
                                    "flags": 256,
                                    "start": 24,
                                    "end": 61
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 20,
                                "end": 61
                            },
                            "autofix": 0,
                            "flags": 128,
                            "start": 20,
                            "end": 61
                        }
                    ],
                    "multiline": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 20,
                    "end": 61
                },
                "autofix": 0,
                "flags": 256,
                "start": 18,
                "end": 63
            },
            "typeParameters": null,
            "returnType": null,
            "autofix": 0,
            "flags": 256,
            "start": 0,
            "end": 63
        }
    ],
    "isModule": false,
    "text": "function not_gen() { x = class extends (a ? null : yield) { } }}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 63,
            "end": 64
        }
    ],
    "start": 0,
    "end": 64
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: function declaration
> :: case: x = class extends (a ? null : yield) { }
## Input

`````js
function not_gen() { x = class extends (a ? null : yield) { } }}
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: function declaration
> :: case: x = class extends (a ? null : yield) { }
## Input

`````js
function not_gen() { x = class extends (a ? null : yield) { } }}
`````
```

