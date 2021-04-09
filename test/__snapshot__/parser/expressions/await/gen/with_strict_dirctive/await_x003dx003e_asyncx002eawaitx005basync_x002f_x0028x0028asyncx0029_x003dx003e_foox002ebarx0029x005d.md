# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: await => async.await[async / ((async) => foo.bar)]
## Input

`````js
'use strict'; await => async.await[async / ((async) => foo.bar)]
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
                "kind": 67174403,
                "value": "use strict",
                "autofix": 0,
                "flags": 768,
                "start": 0,
                "end": 12
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 13
        },
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
                    "start": 13,
                    "end": 19
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
                            "start": 22,
                            "end": 28
                        },
                        "expression": {
                            "kind": 81921,
                            "value": "await",
                            "autofix": 0,
                            "flags": 768,
                            "start": 29,
                            "end": 34
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 22,
                        "end": 34
                    },
                    "expression": {
                        "kind": 198,
                        "left": {
                            "kind": 81921,
                            "value": "async",
                            "autofix": 0,
                            "flags": 768,
                            "start": 35,
                            "end": 40
                        },
                        "operatorToken": {
                            "kind": 35640,
                            "autofix": 0,
                            "flags": 0,
                            "start": 40,
                            "end": 42
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
                                        "start": 45,
                                        "end": 50
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
                                        "start": 54,
                                        "end": 58
                                    },
                                    "expression": {
                                        "kind": 81921,
                                        "value": "bar",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 59,
                                        "end": 62
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 54,
                                    "end": 62
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 44,
                                "end": 62
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 42,
                            "end": 63
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 35,
                        "end": 63
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 22,
                    "end": 64
                },
                "autofix": 0,
                "flags": 256,
                "start": 13,
                "end": 64
            },
            "autofix": 0,
            "flags": 128,
            "start": 13,
            "end": 64
        }
    ],
    "isModule": false,
    "text": "'use strict'; await => async.await[async / ((async) => foo.bar)]",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 64
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: await => async.await[async / ((async) => foo.bar)]
## Input

`````js
'use strict'; await => async.await[async / ((async) => foo.bar)]
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: await => async.await[async / ((async) => foo.bar)]
## Input

`````js
'use strict'; await => async.await[async / ((async) => foo.bar)]
`````
```

