# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: await => async.await[async / ((async) => foo.bar)]
## Input

`````js
await => async.await[async / ((async) => foo.bar)]
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
                "kind": 271,
                "typeParameters": null,
                "parameters": {
                    "kind": 81921,
                    "value": "await",
                    "autofix": 0,
                    "flags": 768,
                    "start": 0,
                    "end": 5
                },
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 130,
                    "member": {
                        "kind": 129,
                        "member": {
                            "kind": 81921,
                            "value": "async",
                            "autofix": 0,
                            "flags": 768,
                            "start": 8,
                            "end": 14
                        },
                        "expression": {
                            "kind": 81921,
                            "value": "await",
                            "autofix": 0,
                            "flags": 768,
                            "start": 15,
                            "end": 20
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 8,
                        "end": 20
                    },
                    "expression": {
                        "kind": 198,
                        "left": {
                            "kind": 81921,
                            "value": "async",
                            "autofix": 0,
                            "flags": 768,
                            "start": 21,
                            "end": 26
                        },
                        "operatorToken": {
                            "kind": 35640,
                            "autofix": 0,
                            "flags": 0,
                            "start": 26,
                            "end": 28
                        },
                        "right": {
                            "kind": 121,
                            "expression": {
                                "kind": 271,
                                "typeParameters": null,
                                "parameters": [
                                    {
                                        "kind": 81921,
                                        "value": "async",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 31,
                                        "end": 36
                                    }
                                ],
                                "asyncToken": false,
                                "returnType": null,
                                "contents": {
                                    "kind": 129,
                                    "member": {
                                        "kind": 81921,
                                        "value": "foo",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 40,
                                        "end": 44
                                    },
                                    "expression": {
                                        "kind": 81921,
                                        "value": "bar",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 45,
                                        "end": 48
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 40,
                                    "end": 48
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 30,
                                "end": 48
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 28,
                            "end": 49
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 21,
                        "end": 49
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 8,
                    "end": 50
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 50
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 50
        }
    ],
    "isModule": false,
    "text": "await => async.await[async / ((async) => foo.bar)]",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 50
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: await => async.await[async / ((async) => foo.bar)]
## Input

`````js
await => async.await[async / ((async) => foo.bar)]
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: await => async.await[async / ((async) => foo.bar)]
## Input

`````js
await => async.await[async / ((async) => foo.bar)]
`````
```

