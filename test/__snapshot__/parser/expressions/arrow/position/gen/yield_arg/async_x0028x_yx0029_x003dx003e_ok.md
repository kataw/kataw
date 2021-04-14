# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: g
> :: test: yield arg
> :: case: async (x, y) => ok
## Input

`````js
function *f() {
  yield async (x, y) => ok
}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 176,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37814362,
                "flags": 768,
                "start": 0,
                "end": 8
            },
            "generatorToken": {
                "kind": 67143222,
                "flags": 768,
                "start": 8,
                "end": 10
            },
            "name": {
                "kind": 81921,
                "text": "f",
                "rawText": "f",
                "flags": 768,
                "start": 10,
                "end": 11
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 256,
                "start": 11,
                "end": 13
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 229,
                                "yieldKeyword": {
                                    "kind": 8454253,
                                    "flags": 768,
                                    "start": 15,
                                    "end": 23
                                },
                                "delegate": false,
                                "asteriskToken": null,
                                "expression": {
                                    "kind": 271,
                                    "arrowToken": {
                                        "kind": 10,
                                        "flags": 768,
                                        "start": 36,
                                        "end": 39
                                    },
                                    "typeParameters": null,
                                    "parameters": [
                                        {
                                            "kind": 81921,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 768,
                                            "start": 31,
                                            "end": 32
                                        },
                                        {
                                            "kind": 81921,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 768,
                                            "start": 33,
                                            "end": 35
                                        }
                                    ],
                                    "asyncToken": {
                                        "kind": 82031,
                                        "flags": 768,
                                        "start": 23,
                                        "end": 29
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 81921,
                                        "text": "ok",
                                        "rawText": "ok",
                                        "flags": 768,
                                        "start": 39,
                                        "end": 42
                                    },
                                    "flags": 2304,
                                    "start": 23,
                                    "end": 42
                                },
                                "flags": 256,
                                "start": 15,
                                "end": 42
                            },
                            "flags": 128,
                            "start": 15,
                            "end": 42
                        }
                    ],
                    "multiline": true,
                    "flags": 256,
                    "start": 15,
                    "end": 42
                },
                "flags": 256,
                "start": 13,
                "end": 44
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 2304,
            "start": 0,
            "end": 44
        }
    ],
    "isModule": false,
    "text": "function *f() {\n  yield async (x, y) => ok\n}",
    "fileName": "__root__",
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
- Path: g
> :: test: yield arg
> :: case: async (x, y) => ok
## Input

`````js
function *f() {
  yield async (x, y) => ok
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
> :: case: async (x, y) => ok
## Input

`````js
function *f() {
  yield async (x, y) => ok
}
`````
```

