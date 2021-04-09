# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: comma lhs
> :: case: async => ok
## Input

`````js
async => ok, a
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
                "kind": 132,
                "expressions": [
                    {
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
                                    "start": 0,
                                    "end": 5
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": null,
                                "autofix": 0,
                                "flags": 256,
                                "start": 0,
                                "end": 5
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
                            "start": 8,
                            "end": 11
                        },
                        "autofix": 0,
                        "flags": 2304,
                        "start": 0,
                        "end": 11
                    },
                    {
                        "kind": 81921,
                        "value": "a",
                        "autofix": 0,
                        "flags": 768,
                        "start": 12,
                        "end": 14
                    }
                ],
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 14
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 14
        }
    ],
    "isModule": false,
    "text": "async => ok, a",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 14
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: comma lhs
> :: case: async => ok
## Input

`````js
async => ok, a
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: comma lhs
> :: case: async => ok
## Input

`````js
async => ok, a
`````
```

