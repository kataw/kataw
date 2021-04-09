# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: g
> :: test: yield arg
> :: case: async async => ok
## Input

`````js
function *f() {
  yield async async => ok
}
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
                "value": "f",
                "autofix": 0,
                "flags": 768,
                "start": 10,
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
                                "kind": 229,
                                "delegate": false,
                                "asteriskToken": null,
                                "expression": {
                                    "kind": 271,
                                    "typeParameters": null,
                                    "parameters": [
                                        {
                                            "kind": 215,
                                            "ellipsisToken": null,
                                            "binding": {
                                                "kind": 81921,
                                                "value": "async",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 29,
                                                "end": 35
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 23,
                                            "end": 35
                                        }
                                    ],
                                    "asyncToken": {
                                        "kind": 82031,
                                        "autofix": 0,
                                        "flags": 0,
                                        "start": 23,
                                        "end": 29
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 81921,
                                        "value": "ok",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 38,
                                        "end": 41
                                    },
                                    "autofix": 0,
                                    "flags": 2304,
                                    "start": 23,
                                    "end": 41
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 15,
                                "end": 41
                            },
                            "autofix": 0,
                            "flags": 128,
                            "start": 15,
                            "end": 41
                        }
                    ],
                    "multiline": true,
                    "autofix": 0,
                    "flags": 256,
                    "start": 15,
                    "end": 41
                },
                "autofix": 0,
                "flags": 256,
                "start": 13,
                "end": 43
            },
            "typeParameters": null,
            "returnType": null,
            "autofix": 0,
            "flags": 2304,
            "start": 0,
            "end": 43
        }
    ],
    "isModule": false,
    "text": "function *f() {\n  yield async async => ok\n}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 43
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: g
> :: test: yield arg
> :: case: async async => ok
## Input

`````js
function *f() {
  yield async async => ok
}
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: g
> :: test: yield arg
> :: case: async async => ok
## Input

`````js
function *f() {
  yield async async => ok
}
`````
```

