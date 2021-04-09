# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: double
> :: case: async async => ok
## Input

`````js
async async => ok async async => ok
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
                "parameters": [
                    {
                        "kind": 215,
                        "ellipsisToken": null,
                        "binding": {
                            "kind": 81921,
                            "value": "async",
                            "autofix": 0,
                            "flags": 768,
                            "start": 5,
                            "end": 11
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "autofix": 0,
                        "flags": 256,
                        "start": 0,
                        "end": 11
                    }
                ],
                "asyncToken": {
                    "kind": 82031,
                    "autofix": 0,
                    "flags": 0,
                    "start": 0,
                    "end": 5
                },
                "returnType": null,
                "contents": {
                    "kind": 81921,
                    "value": "ok",
                    "autofix": 0,
                    "flags": 768,
                    "start": 14,
                    "end": 17
                },
                "autofix": 0,
                "flags": 2304,
                "start": 0,
                "end": 17
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 17
        },
        {
            "kind": 120,
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
                            "start": 23,
                            "end": 29
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "autofix": 0,
                        "flags": 256,
                        "start": 17,
                        "end": 29
                    }
                ],
                "asyncToken": {
                    "kind": 82031,
                    "autofix": 0,
                    "flags": 0,
                    "start": 17,
                    "end": 23
                },
                "returnType": null,
                "contents": {
                    "kind": 81921,
                    "value": "ok",
                    "autofix": 0,
                    "flags": 768,
                    "start": 32,
                    "end": 35
                },
                "autofix": 0,
                "flags": 2304,
                "start": 17,
                "end": 35
            },
            "autofix": 0,
            "flags": 128,
            "start": 17,
            "end": 35
        }
    ],
    "isModule": false,
    "text": "async async => ok async async => ok",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 17,
            "end": 23
        }
    ],
    "start": 0,
    "end": 35
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: double
> :: case: async async => ok
## Input

`````js
async async => ok async async => ok
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: double
> :: case: async async => ok
## Input

`````js
async async => ok async async => ok
`````
```

