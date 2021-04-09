# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: g
> :: test: await arg
> :: case: async x => ok
## Input

`````js
async function f() {
  await async x => ok
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
            "asyncToken": {
                "kind": 82031,
                "autofix": 0,
                "flags": 0,
                "start": 0,
                "end": 5
            },
            "generatorToken": null,
            "name": {
                "kind": 81921,
                "value": "f",
                "autofix": 0,
                "flags": 768,
                "start": 14,
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
                                "kind": 208,
                                "expression": {
                                    "kind": 271,
                                    "typeParameters": null,
                                    "parameters": [
                                        {
                                            "kind": 215,
                                            "ellipsisToken": null,
                                            "binding": {
                                                "kind": 81921,
                                                "value": "x",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 34,
                                                "end": 36
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 28,
                                            "end": 36
                                        }
                                    ],
                                    "asyncToken": {
                                        "kind": 82031,
                                        "autofix": 0,
                                        "flags": 0,
                                        "start": 28,
                                        "end": 34
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 81921,
                                        "value": "ok",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 39,
                                        "end": 42
                                    },
                                    "autofix": 0,
                                    "flags": 2304,
                                    "start": 28,
                                    "end": 42
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 20,
                                "end": 42
                            },
                            "autofix": 0,
                            "flags": 128,
                            "start": 20,
                            "end": 42
                        }
                    ],
                    "multiline": true,
                    "autofix": 0,
                    "flags": 256,
                    "start": 20,
                    "end": 42
                },
                "autofix": 0,
                "flags": 256,
                "start": 18,
                "end": 44
            },
            "typeParameters": null,
            "returnType": null,
            "autofix": 0,
            "flags": 1280,
            "start": 0,
            "end": 44
        }
    ],
    "isModule": false,
    "text": "async function f() {\n  await async x => ok\n}",
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
- Path: g
> :: test: await arg
> :: case: async x => ok
## Input

`````js
async function f() {
  await async x => ok
}
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: g
> :: test: await arg
> :: case: async x => ok
## Input

`````js
async function f() {
  await async x => ok
}
`````
```

