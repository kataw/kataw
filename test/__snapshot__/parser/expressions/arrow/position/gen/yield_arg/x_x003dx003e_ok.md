# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: g
> :: test: yield arg
> :: case: x => ok
## Input

`````js
function *f() {
  yield x => ok
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
                                    "parameters": {
                                        "kind": 81921,
                                        "value": "x",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 23,
                                        "end": 25
                                    },
                                    "asyncToken": null,
                                    "returnType": null,
                                    "contents": {
                                        "kind": 81921,
                                        "value": "ok",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 28,
                                        "end": 31
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 23,
                                    "end": 31
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 15,
                                "end": 31
                            },
                            "autofix": 0,
                            "flags": 128,
                            "start": 15,
                            "end": 31
                        }
                    ],
                    "multiline": true,
                    "autofix": 0,
                    "flags": 256,
                    "start": 15,
                    "end": 31
                },
                "autofix": 0,
                "flags": 256,
                "start": 13,
                "end": 33
            },
            "typeParameters": null,
            "returnType": null,
            "autofix": 0,
            "flags": 2304,
            "start": 0,
            "end": 33
        }
    ],
    "isModule": false,
    "text": "function *f() {\n  yield x => ok\n}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 33
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: g
> :: test: yield arg
> :: case: x => ok
## Input

`````js
function *f() {
  yield x => ok
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
> :: case: x => ok
## Input

`````js
function *f() {
  yield x => ok
}
`````
```

