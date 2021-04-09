# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: d
> :: test: yield
> :: case: a instanceof b > c
## Input

`````js
function *f() {
  yield a instanceof b > c
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
                                    "kind": 198,
                                    "left": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 81921,
                                            "value": "a",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 23,
                                            "end": 25
                                        },
                                        "operatorToken": {
                                            "kind": 4229173,
                                            "autofix": 0,
                                            "flags": 0,
                                            "start": 25,
                                            "end": 36
                                        },
                                        "right": {
                                            "kind": 81921,
                                            "value": "b",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 36,
                                            "end": 38
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 23,
                                        "end": 38
                                    },
                                    "operatorToken": {
                                        "kind": 34883,
                                        "autofix": 0,
                                        "flags": 0,
                                        "start": 38,
                                        "end": 40
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "value": "c",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 40,
                                        "end": 42
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 23,
                                    "end": 42
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 15,
                                "end": 42
                            },
                            "autofix": 0,
                            "flags": 128,
                            "start": 15,
                            "end": 42
                        }
                    ],
                    "multiline": true,
                    "autofix": 0,
                    "flags": 256,
                    "start": 15,
                    "end": 42
                },
                "autofix": 0,
                "flags": 256,
                "start": 13,
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
    "text": "function *f() {\n  yield a instanceof b > c\n}",
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
- Path: d
> :: test: yield
> :: case: a instanceof b > c
## Input

`````js
function *f() {
  yield a instanceof b > c
}
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: d
> :: test: yield
> :: case: a instanceof b > c
## Input

`````js
function *f() {
  yield a instanceof b > c
}
`````
```

