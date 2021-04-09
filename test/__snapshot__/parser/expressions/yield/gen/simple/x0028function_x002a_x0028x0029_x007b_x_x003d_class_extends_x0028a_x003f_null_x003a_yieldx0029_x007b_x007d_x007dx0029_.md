# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: (function * () { x = class extends (a ? null : yield) { } });
## Input

`````js
(function * () { x = class extends (a ? null : yield) { } });
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 177,
                    "asyncToken": null,
                    "generatorToken": {
                        "kind": 67143222,
                        "autofix": 0,
                        "flags": 0,
                        "start": 9,
                        "end": 11
                    },
                    "name": null,
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
                                        "kind": 125,
                                        "left": {
                                            "kind": 81921,
                                            "value": "x",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 16,
                                            "end": 18
                                        },
                                        "operatorToken": {
                                            "kind": 37814352,
                                            "autofix": 0,
                                            "flags": 0,
                                            "start": 16,
                                            "end": 20
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
                                                            "start": 36,
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
                                                            "kind": 269,
                                                            "value": null,
                                                            "autofix": 0,
                                                            "flags": 768,
                                                            "start": 39,
                                                            "end": 44
                                                        },
                                                        "colonToken": {
                                                            "kind": 21,
                                                            "autofix": 0,
                                                            "flags": 0,
                                                            "start": 44,
                                                            "end": 46
                                                        },
                                                        "alternate": {
                                                            "kind": 229,
                                                            "delegate": false,
                                                            "asteriskToken": null,
                                                            "expression": null,
                                                            "autofix": 0,
                                                            "flags": 256,
                                                            "start": 46,
                                                            "end": 52
                                                        },
                                                        "autofix": 0,
                                                        "flags": 256,
                                                        "start": 34,
                                                        "end": 52
                                                    },
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 34,
                                                    "end": 53
                                                },
                                                "typeParameter": null,
                                                "flags": 128,
                                                "start": 34,
                                                "end": 53
                                            },
                                            "members": {
                                                "kind": 277,
                                                "elements": [],
                                                "flags": 256,
                                                "start": 55,
                                                "end": 57
                                            },
                                            "flags": 256,
                                            "start": 20,
                                            "end": 57
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 16,
                                        "end": 57
                                    },
                                    "autofix": 0,
                                    "flags": 128,
                                    "start": 16,
                                    "end": 57
                                }
                            ],
                            "multiline": false,
                            "autofix": 0,
                            "flags": 256,
                            "start": 16,
                            "end": 57
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 14,
                        "end": 59
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "autofix": 0,
                    "flags": 2304,
                    "start": 1,
                    "end": 59
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 60
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 61
        }
    ],
    "isModule": false,
    "text": "(function * () { x = class extends (a ? null : yield) { } });",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 61
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: (function * () { x = class extends (a ? null : yield) { } });
## Input

`````js
(function * () { x = class extends (a ? null : yield) { } });
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: (function * () { x = class extends (a ? null : yield) { } });
## Input

`````js
(function * () { x = class extends (a ? null : yield) { } });
`````
```

